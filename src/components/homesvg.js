import React from 'react';
import logo from '../assets/nhl934.png'; 


const FuturisticLogoAnimation = () => {
    console.log('Logo path:', logo); 
    
  return (
    <div className="relative w-full h-full">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" className="w-full h-full">
        <defs>
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" style={{stopColor:"#00ffff", stopOpacity:0.7}} />
            <stop offset="100%" style={{stopColor:"#000033", stopOpacity:0}} />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{stopColor:"#ff00ff", stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:"#00ffff", stopOpacity:1}} />
          </linearGradient>
          <path id="dataPath1" d="M-100,100 Q200,50 500,100" />
          <path id="dataPath2" d="M500,200 Q200,250 -100,200" />
          <path id="dataPath3" d="M-100,300 Q200,350 500,300" />
        </defs>
        
        <style>
          {`
            @keyframes orbit {
              from { transform: rotate(0deg) translateX(80px) rotate(0deg); }
              to   { transform: rotate(360deg) translateX(80px) rotate(-360deg); }
            }
            @keyframes pulse {
              0%, 100% { r: 3; opacity: 0.7; }
              50% { r: 5; opacity: 1; }
            }
            @keyframes dataFlow {
              0% { stroke-dashoffset: 1000; }
              100% { stroke-dashoffset: 0; }
            }
            @keyframes rotatePolygon {
              from { transform: rotate(0deg); }
              to   { transform: rotate(360deg); }
            }
            @keyframes hologramFlicker {
              0%, 100% { opacity: 0.7; }
              50% { opacity: 0.9; }
            }
            .orbital-path { fill: none; stroke: url(#neonGradient); stroke-width: 0.5; opacity: 0.3; }
            .node { fill: #00ffff; filter: url(#glow); }
            .data-stream { fill: none; stroke: url(#neonGradient); stroke-width: 2; stroke-dasharray: 10 5; }
            .polygon { fill: none; stroke: url(#neonGradient); stroke-width: 1; opacity: 0.5; }
            .hologram { fill: none; stroke: #00ffff; stroke-width: 0.5; opacity: 0.7; }
            .binary-text { font-family: monospace; font-size: 12px; fill: #00ffff; opacity: 0.7; }
          `}
        </style>
      
        <rect width="100%" height="100%" fill="none" />
        
        <circle cx="200" cy="200" r="140" fill="url(#centerGlow)" opacity="0.2" />
      
        {/* Orbital Paths */}
        <circle className="orbital-path" cx="200" cy="200" r="100">
          <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="100s" repeatCount="indefinite" />
        </circle>
        <circle className="orbital-path" cx="200" cy="200" r="130">
          <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="-360 200 200" dur="120s" repeatCount="indefinite" />
        </circle>
        <circle className="orbital-path" cx="200" cy="200" r="70">
          <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="80s" repeatCount="indefinite" />
        </circle>
      
        {/* Orbiting Nodes */}
        <g>
          <circle className="node" cx="300" cy="200" r="4">
            <animateMotion path="M0,0 A100,100 0 1,1 0,-0.1 A100,100 0 1,1 0,0" dur="20s" repeatCount="indefinite" />
            <animate attributeName="r" values="4;6;4" dur="3s" repeatCount="indefinite" />
          </circle>
        </g>
        <g>
          <circle className="node" cx="330" cy="200" r="4">
            <animateMotion path="M0,0 A130,130 0 1,0 0,0.1 A130,130 0 1,0 0,0" dur="25s" repeatCount="indefinite" />
            <animate attributeName="r" values="4;6;4" dur="4s" repeatCount="indefinite" />
          </circle>
        </g>
        <g>
          <circle className="node" cx="270" cy="200" r="4">
            <animateMotion path="M0,0 A70,70 0 1,1 0,-0.1 A70,70 0 1,1 0,0" dur="15s" repeatCount="indefinite" />
            <animate attributeName="r" values="4;6;4" dur="5s" repeatCount="indefinite" />
          </circle>
        </g>
      
        {/* Central Node */}
        <circle cx="200" cy="200" r="10" fill="url(#neonGradient)" filter="url(#glow)">
          <animate attributeName="r" values="10;12;10" dur="3s" repeatCount="indefinite" />
        </circle>
      
        {/* Data Streams */}
        <path className="data-stream" d="M200,200 Q280,120 360,200">
          <animate attributeName="d" values="M200,200 Q280,120 360,200; M200,200 Q280,280 360,200; M200,200 Q280,120 360,200" dur="10s" repeatCount="indefinite" />
          <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="20s" repeatCount="indefinite" />
        </path>
        <path className="data-stream" d="M200,200 Q120,280 40,200">
          <animate attributeName="d" values="M200,200 Q120,280 40,200; M200,200 Q120,120 40,200; M200,200 Q120,280 40,200" dur="15s" repeatCount="indefinite" />
          <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="25s" repeatCount="indefinite" />
        </path>
      
        {/* Floating Particles */}
        <g>
          <circle className="node" cx="150" cy="150" r="2">
            <animate attributeName="cx" values="150;250;150" dur="20s" repeatCount="indefinite" />
            <animate attributeName="cy" values="150;250;150" dur="20s" repeatCount="indefinite" />
            <animate attributeName="r" values="2;4;2" dur="5s" repeatCount="indefinite" />
          </circle>
          <circle className="node" cx="250" cy="150" r="2">
            <animate attributeName="cx" values="250;150;250" dur="25s" repeatCount="indefinite" />
            <animate attributeName="cy" values="150;250;150" dur="25s" repeatCount="indefinite" />
            <animate attributeName="r" values="2;4;2" dur="6s" repeatCount="indefinite" />
          </circle>
          <circle className="node" cx="200" cy="100" r="2">
            <animate attributeName="cx" values="200;280;120;200" dur="30s" repeatCount="indefinite" />
            <animate attributeName="cy" values="100;200;300;100" dur="30s" repeatCount="indefinite" />
            <animate attributeName="r" values="2;4;2" dur="7s" repeatCount="indefinite" />
          </circle>
        </g>
      
        {/* Rotating Polygons */}
        <g transform="translate(200 200)">
          <polygon className="polygon" points="0,-60 52,-30 52,30 0,60 -52,30 -52,-30">
            <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="30s" repeatCount="indefinite" />
          </polygon>
          <polygon className="polygon" points="0,-80 69,-40 69,40 0,80 -69,40 -69,-40">
            <animateTransform attributeName="transform" type="rotate" from="0" to="-360" dur="40s" repeatCount="indefinite" />
          </polygon>
        </g>
      
        {/* Holographic Interface */}
        <g transform="translate(200 200)">
          <circle className="hologram" r="50">
            <animate attributeName="opacity" values="0.7;0.9;0.7" dur="3s" repeatCount="indefinite" />
          </circle>
          <line className="hologram" x1="-50" y1="0" x2="50" y2="0">
            <animate attributeName="opacity" values="0.7;0.9;0.7" dur="3s" repeatCount="indefinite" />
          </line>
          <line className="hologram" x1="0" y1="-50" x2="0" y2="50">
            <animate attributeName="opacity" values="0.7;0.9;0.7" dur="3s" repeatCount="indefinite" />
          </line>
        </g>
      
        {/* Energy Pulses */}
        <circle cx="200" cy="200" r="0" fill="url(#neonGradient)" opacity="0">
          <animate attributeName="r" values="0;140;0" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.7;0;0.7" dur="4s" repeatCount="indefinite" />
        </circle>

        {/* <img 
        src={logo}
        alt="Logo" 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-red-500"
      /> */}
      
        {/* Binary Data Animations */}
        <text className="binary-text">
          <textPath href="#dataPath1">
          01011010010110100010110100101101000101101001011010001011010010110100
            <animate attributeName="startOffset" from="100%" to="-100%" dur="30s" repeatCount="indefinite" />
          </textPath>
        </text>
        <text className="binary-text">
          <textPath href="#dataPath2">
           1001011010010110100101101001011010010110100101101001011010010110
            <animate attributeName="startOffset" from="-100%" to="100%" dur="40s" repeatCount="indefinite" />
          </textPath>
        </text>
        <text className="binary-text">
          <textPath href="#dataPath3">
     0110100101101001011010010110100101101001011010010110100101101001
            <animate attributeName="startOffset" from="100%" to="-100%" dur="36s" repeatCount="indefinite" />
          </textPath>
        </text>
      </svg>
     
      
   
     
      
     
    </div>
  );
};

export default FuturisticLogoAnimation;