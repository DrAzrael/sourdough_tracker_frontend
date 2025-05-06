import type { Route } from "./+types/home";
import DraggableMain from './draggable';
import { useRef, useState } from 'react';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sourdough tracker" },
    { name: "Sourdough tracker", content: "Sourdough tracker" },
  ];
}

export default function Home() {
  const [gridDimensions, setGridDimensions] = useState({ 
    left: -20, 
    right: 20, 
    top: -10, 
    bottom: 10 
  });
  const [selectedCell, setSelectedCell] = useState<{x: number, y: number} | null>(null);
  const [activeGuide, setActiveGuide] = useState<boolean>(false);
  const gridRef = useRef<HTMLDivElement>(null);
  const cellSize = 50;

  const handleCellDoubleClick = (x: number, y: number) => {
    setSelectedCell({x, y});
    console.log(`Cell double-clicked: (${x}, ${y})`);
  };

  const generateGrid = () => {
    const cells = [];
    
    for (let y = gridDimensions.bottom; y >= gridDimensions.top; y--) {
      for (let x = gridDimensions.left; x <= gridDimensions.right; x++) {
        const isCenter = x === 0 && y === 0;
        cells.push(
          <div 
            key={`${x}-${y}`}
            className={`absolute border-[#61401C] border-6 ${
              isCenter ? 'bg-[#A47A3B]' : 'bg-[#A47A3B] bg-opacity-50'
            } flex items-center justify-center cursor-pointer hover:bg-[#8a6a3a] transition-colors`}
            style={{
              width: `${cellSize}px`,
              height: `${cellSize}px`,
              left: `${(x + Math.abs(gridDimensions.left)) * cellSize}px`,
              top: `${(gridDimensions.bottom - y) * cellSize}px`,
              zIndex: isCenter ? 10 : 1,
            }}
            onDoubleClick={() => handleCellDoubleClick(x, y)}
              // Changed to onDoubleClick
          >
            <span className="text-xs text-[#F5DEAE]">{x},{y}</span>
            {isCenter && (
              <div 
                className="absolute border-2 border-red-500 w-full h-full pointer-events-none"
                style={{
                  zIndex: 11,
                }}
              />
            )}
          </div>
        );
      }
    }
    return cells;
  };
  // 0 = left
  // 1 = up
  // 2 = right
  // 3 = down
  // Expand grid when near edges
  const expandGrid = (direction: number) => {
    if(direction == 0){
      setGridDimensions(prev => ({
        left: prev.left - 5,
        right: prev.right + 0,
        top: prev.top - 0,
        bottom: prev.bottom + 0
      }));
    }

    if(direction == 1){
      setGridDimensions(prev => ({
        left: prev.left - 0,
        right: prev.right + 0,
        top: prev.top - 5,
        bottom: prev.bottom + 0
      }));
    }

    if(direction == 2){
      setGridDimensions(prev => ({
        left: prev.left - 0,
        right: prev.right + 5,
        top: prev.top - 0,
        bottom: prev.bottom + 0
      }));
    }

    if(direction == 3){
      setGridDimensions(prev => ({
        left: prev.left - 0,
        right: prev.right + 0,
        top: prev.top - 0,
        bottom: prev.bottom + 5
      }));
    }


  };

  // Calculate container size based on grid dimensions
  const containerStyle = {
    width: `${(gridDimensions.right - gridDimensions.left + 1) * cellSize}px`,
    height: `${(gridDimensions.bottom - gridDimensions.top + 1) * cellSize}px`,
    position: 'relative' as const,
    margin: 'auto', // Center the grid container
  };

  return (
    <>
      <div className="header h-[10%] bg-[#BA9042] flex items-center justify-between border-b-6 border-b-[#4a3015]">
        <img className="h-[80%] ml-5" src="/logo.svg" alt="Logo"/>
        <button className="m-6 rounded-b-3 bg-[#A47A3B] w-10 h-10 text-center rounded-full flex items-center justify-center" onClick={()=>{setActiveGuide(!activeGuide)}}>
          <img className="h-[78%]" src="/question_mark.svg" alt="question mark" />
        </button>
      </div>

      <DraggableMain>
        <div 
          ref={gridRef}
          className="grid-container"
          style={containerStyle}
        >
          {/* Center marker */}
          <div 
            className="absolute border-2 border-red-500 z-10"
            style={{
              width: `${cellSize}px`,
              height: `${cellSize}px`,
              left: `${Math.abs(gridDimensions.left) * cellSize}px`,
              top: `${(gridDimensions.bottom - 0) * cellSize}px`,
            }}
          />
          
          {generateGrid()}
        </div>
      </DraggableMain>

      {/* Simple popup/modal for selected cell */}
      {selectedCell && (
  <div className="fixed inset-0 z-50">
    <div 
      className="fixed inset-0"
      onClick={() => setSelectedCell(null)}
    />
    
    {/* Sidebar */}
    <div className="fixed left-0 top-[10%] h-[90%] w-96 bg-[#A47A3B] shadow-lg transform transition-transform duration-300 ease-in-out">
      <div className="p-6 h-full flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-white text-2xl font-bold">
            Cell Details: ({selectedCell.x}, {selectedCell.y})
          </h3>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {/* Add your cell content here */}
          <div className="bg-[#8a6a3a] p-4 rounded-lg mb-4">
            <h4 className="text-white font-semibold mb-2">Coordinates</h4>
            <p className="text-[#F5DEAE]">X: {selectedCell.x}</p>
            <p className="text-[#F5DEAE]">Y: {selectedCell.y}</p>
          </div>
          
          {/* Example additional sections */}
          <div className="bg-[#8a6a3a] p-4 rounded-lg mb-4">
            <h4 className="text-white font-semibold mb-2">Properties</h4>
            <p className="text-[#F5DEAE]">Add your cell properties here</p>
          </div>
        </div>
        
        <div className="mt-auto pt-4 border-t border-[#61401C]">
          <button 
            className="w-full bg-[#61401C] text-white px-4 py-3 rounded hover:bg-[#4a3015] transition-colors"
            onClick={() => setSelectedCell(null)}
          >
            Close Panel
          </button>
        </div>
      </div>
    </div>
  </div>
)}

{activeGuide && (
  <>

    {/* Help bar */}
    <div className="fixed right-0 top-[10%] h-[90%] w-60 bg-[#A47A3B] shadow-lg transform transition-transform duration-300 ease-in-out">
      <div className="p-6 h-full flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-white text-2xl font-bold">
            Cell Details: 
          </h3>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {/* Add your cell content here */}
          <div className="bg-[#8a6a3a] p-4 rounded-lg mb-4">
            <h4 className="text-white font-semibold mb-2">Coordinates</h4>

          </div>
          
          {/* Example additional sections */}
          <div className="bg-[#8a6a3a] p-4 rounded-lg mb-4">
            <h4 className="text-white font-semibold mb-2">Properties</h4>
            <p className="text-[#F5DEAE]">Add your cell properties here</p>
          </div>
        </div>
        
        <div className="mt-auto pt-4 border-t border-[#61401C]">
          <button 
            className="w-full bg-[#61401C] text-white px-4 py-3 rounded hover:bg-[#4a3015] transition-colors"
            onClick={() => setActiveGuide(false)}
          >
            Close Panel
          </button>
        </div>
      </div>
    </div>
  </>
)}

      {/* <div className="footer h-fit bg-[#BA9042] flex flex-col">
        <span className="footers_header font-bold text-lg m-3 text-white">Site Links</span>
        <div className="sections flex flex-row ml-3">
          <div className="section flex flex-col">
            <a className="link my-1 text-white" href="">github</a>
            <a className="link my-1 text-white" href="">backend repo</a>
            <a className="link my-1 text-white" href="">frontend repo</a>
          </div>
        </div>
      </div> */}
    </>
  );
}