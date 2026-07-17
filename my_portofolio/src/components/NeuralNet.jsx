"use client";
import React, { useState, useEffect, useCallback } from 'react';

const layers = [
  [300, 500, 700],           // Input layer
  [200, 400, 600, 800],      // Hidden layer 1
  [200, 400, 600, 800],      // Hidden layer 2
  [400, 600]                 // Output layer
];
const xs = [200, 600, 1000, 1400];
const duration = 1.2; // 1.2s per segment for a slower, calmer bolt

export default function NeuralNet() {
  const [activePaths, setActivePaths] = useState([]);

  const fireBolt = useCallback(() => {
    const n0 = Math.floor(Math.random() * layers[0].length);
    const n1 = Math.floor(Math.random() * layers[1].length);
    const n2 = Math.floor(Math.random() * layers[2].length);
    const n3 = Math.floor(Math.random() * layers[3].length);
    
    const id = Date.now() + Math.random();

    const newPath = {
      id,
      segments: [
        { x1: xs[0], y1: layers[0][n0], x2: xs[1], y2: layers[1][n1], delay: 0 },
        { x1: xs[1], y1: layers[1][n1], x2: xs[2], y2: layers[2][n2], delay: duration },
        { x1: xs[2], y1: layers[2][n2], x2: xs[3], y2: layers[3][n3], delay: duration * 2 },
      ],
      nodes: [
        { cx: xs[0], cy: layers[0][n0], delay: 0 },
        { cx: xs[1], cy: layers[1][n1], delay: duration },
        { cx: xs[2], cy: layers[2][n2], delay: duration * 2 },
        { cx: xs[3], cy: layers[3][n3], delay: duration * 3 },
      ]
    };

    setActivePaths(prev => [...prev, newPath]);

    // Cleanup path after animation finishes
    setTimeout(() => {
      setActivePaths(prev => prev.filter(p => p.id !== id));
    }, duration * 4000);
  }, []);

  useEffect(() => {
    // Fire initial bolt after a tiny delay to prevent cascading renders
    const initialTimeout = setTimeout(() => {
      fireBolt();
    }, 100);

    const interval = setInterval(() => {
      // Fire exactly 1 bolt per interval
      fireBolt();
    }, 6000); // Wait long enough for the previous bolt to finish

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [fireBolt]);

  return (
    <>
      <svg className="w-full h-full" viewBox="0 0 1600 1000" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        
        {/* Draw base edges */}
        {layers.map((layer, i) => {
          if (i === layers.length - 1) return null;
          const nextLayer = layers[i + 1];
          return layer.map((y1, j) => (
            nextLayer.map((y2, k) => (
              <line 
                key={`base-edge-${i}-${j}-${k}`}
                x1={xs[i]} y1={y1} 
                x2={xs[i+1]} y2={y2} 
                stroke="#1e293b" // very dark slate, subtle background web
                strokeWidth="2"
                style={{ opacity: 0.4 }}
              />
            ))
          ));
        })}

        {/* Draw active bolt segments */}
        {activePaths.map(path => (
          <g key={`path-${path.id}`}>
            {path.segments.map((seg, i) => (
              <line
                key={`seg-${i}`}
                x1={seg.x1} y1={seg.y1}
                x2={seg.x2} y2={seg.y2}
                stroke="#facc15"
                strokeWidth="2"
                pathLength="100"
                strokeDasharray="40 100" // 40 length bolt, 100 gap
                style={{
                  strokeDashoffset: 40,
                  opacity: 0,
                  animation: `runBolt ${duration}s linear ${seg.delay}s forwards`,
                  filter: 'drop-shadow(0 0 4px rgba(250,204,21,0.5))'
                }}
              />
            ))}
            
            {/* Draw active node glows */}
            {path.nodes.map((node, i) => (
              <circle
                key={`glow-${i}`}
                cx={node.cx} cy={node.cy}
                r="12"
                fill="#facc15"
                style={{
                  opacity: 0,
                  animation: `nodeGlow ${duration * 1.5}s ease-out ${node.delay}s forwards`,
                  filter: 'drop-shadow(0 0 6px rgba(250,204,21,0.5))'
                }}
              />
            ))}
          </g>
        ))}

        {/* Draw base nodes */}
        {layers.map((layer, i) => (
          layer.map((y, j) => (
            <circle 
              key={`base-node-${i}-${j}`}
              cx={xs[i]} cy={y} 
              r="12" 
              fill="#0f172a" 
              stroke="#1e293b" 
              strokeWidth="2"
              style={{ opacity: 0.6 }}
            />
          ))
        ))}
      </svg>
    </>
  );
}
