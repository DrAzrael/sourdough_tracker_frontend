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
  return (
    <>
    
    </>
  );
}