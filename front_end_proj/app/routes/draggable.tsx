import React, { useState, useRef, useEffect } from 'react';
import type { ReactNode } from 'react';


interface Position {
  x: number;
  y: number;
}

interface DraggableMainProps {
  children: ReactNode;
}

function DraggableMain({ children }: DraggableMainProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState<Position>({ x: 0, y: 0 });
  const [translate, setTranslate] = useState<Position>({ x: 0, y: 0 });
  const [scale, setScale] = useState<number>(1);
  const [isInitialized, setIsInitialized] = useState(false);

  // Calculate initial center position only once on mount
  useEffect(() => {
    if (containerRef.current && contentRef.current && !isInitialized) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const contentRect = contentRef.current.getBoundingClientRect();
      
      // Calculate center position
      const centerX = (containerRect.width - contentRect.width) / 2;
      const centerY = (containerRect.height - contentRect.height) / 2;
      
      setTranslate({
        x: centerX,
        y: centerY
      });
      setIsInitialized(true);
    }
  }, []);

  // Handle wheel events for zooming and prevent page scroll when over graph
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (container.contains(e.target as Node)) {
        e.preventDefault();
        
        const delta = -e.deltaY;
        const zoomFactor = 0.1;
        let newScale = delta > 0 ? scale * (1 + zoomFactor) : scale * (1 - zoomFactor);
        
        // Limit zoom range
        newScale = Math.min(Math.max(0.5, newScale), 4);
        
        const rect = container.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        // Calculate new translate based on mouse position
        const newTranslate = {
          x: mouseX - (mouseX - translate.x) * (newScale / scale),
          y: mouseY - (mouseY - translate.y) * (newScale / scale)
        };
        
        setTranslate(newTranslate);
        setScale(newScale);
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, [scale, translate]);

  // Mouse event handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return; // Only left mouse button
    
    setIsDragging(true);
    setStartPos({
      x: e.clientX - translate.x,
      y: e.clientY - translate.y
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    
    setTranslate({
      x: e.clientX - startPos.x,
      y: e.clientY - startPos.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setIsDragging(true);
    setStartPos({
      x: touch.clientX - translate.x,
      y: touch.clientY - translate.y
    });
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    
    setTranslate({
      x: touch.clientX - startPos.x,
      y: touch.clientY - startPos.y
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Add/remove event listeners
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('mousemove', handleMouseMove as EventListener);
    window.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('touchmove', handleTouchMove as EventListener);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove as EventListener);
      window.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('touchmove', handleTouchMove as EventListener);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, startPos]);

  // Calculate content style
  const contentStyle = {
    transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})`,
  };

  return (
    <div className="main bg-[#61401C] h-[90%] relative overflow-hidden">
      <div 
        ref={containerRef}
        className="w-full h-full overflow-hidden select-none"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        <div
          ref={contentRef}
          className="absolute top-0 left-0 w-fit h-fit flex flex-col items-center justify-center origin-top-left"
          style={contentStyle}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default DraggableMain;