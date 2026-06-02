import React, { useRef, useState, useEffect } from "react";
import { Trash2, RotateCcw, Eye, EyeOff } from "lucide-react";

interface CanvasPadProps {
  kanji: string;
  onStrokeDrawn?: () => void;
}

export const CanvasPad: React.FC<CanvasPadProps> = ({ kanji, onStrokeDrawn }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [showGuide, setShowGuide] = useState(true);
  const [brushSize, setBrushSize] = useState(6);
  const [brushColor, setBrushColor] = useState("#20C997"); // Teal glow accent
  const [history, setHistory] = useState<string[]>([]); // Saves dataURLs for undo

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Handle high DPI screens
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    const context = canvas.getContext("2d");
    if (!context) return;
    context.scale(2, 2);
    context.lineCap = "round";
    context.lineJoin = "round";
    context.strokeStyle = brushColor;
    context.lineWidth = brushSize;
    contextRef.current = context;

    // Save initial state (blank canvas)
    setHistory([canvas.toDataURL()]);

    // Handle resize
    const handleResize = () => {
      const activeRect = canvas.getBoundingClientRect();
      // Keep canvas data by drawing it back on resize if necessary
      const tempCanvas = document.createElement("canvas");
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
      const tempCtx = tempCanvas.getContext("2d");
      if (tempCtx) tempCtx.drawImage(canvas, 0, 0);

      canvas.width = activeRect.width * 2;
      canvas.height = activeRect.height * 2;
      canvas.style.width = `${activeRect.width}px`;
      canvas.style.height = `${activeRect.height}px`;

      context.scale(2, 2);
      context.lineCap = "round";
      context.lineJoin = "round";
      context.strokeStyle = brushColor;
      context.lineWidth = brushSize;
      
      context.drawImage(tempCanvas, 0, 0, activeRect.width, activeRect.height);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update stroke settings
  useEffect(() => {
    if (contextRef.current) {
      contextRef.current.strokeStyle = brushColor;
      contextRef.current.lineWidth = brushSize;
    }
  }, [brushColor, brushSize]);

  // Handle drawing events
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas || !contextRef.current) return;

    const coords = getCoordinates(e);
    contextRef.current.beginPath();
    contextRef.current.moveTo(coords.x, coords.y);
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    if (!isDrawing || !contextRef.current) return;

    const coords = getCoordinates(e);
    contextRef.current.lineTo(coords.x, coords.y);
    contextRef.current.stroke();
  };

  const stopDrawing = () => {
    if (!isDrawing) return;
    setIsDrawing(false);
    if (contextRef.current) contextRef.current.closePath();

    // Save history for Undo
    const canvas = canvasRef.current;
    if (canvas) {
      setHistory(prev => [...prev, canvas.toDataURL()]);
    }

    if (onStrokeDrawn) onStrokeDrawn();
  };

  const getCoordinates = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };

    const rect = canvas.getBoundingClientRect();
    let clientX = 0;
    let clientY = 0;

    if ("touches" in e) {
      if (e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      }
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = contextRef.current;
    if (!canvas || !context) return;

    context.clearRect(0, 0, canvas.width, canvas.height);
    
    // Save history
    const clearedState = canvas.toDataURL();
    setHistory([clearedState]);
  };

  const undo = () => {
    if (history.length <= 1) return; // Keep initial blank canvas
    
    const newHistory = history.slice(0, -1);
    setHistory(newHistory);

    const previousStateUrl = newHistory[newHistory.length - 1];
    const canvas = canvasRef.current;
    const context = contextRef.current;
    if (!canvas || !context) return;

    const img = new Image();
    img.src = previousStateUrl;
    img.onload = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      const rect = canvas.getBoundingClientRect();
      context.drawImage(img, 0, 0, rect.width, rect.height);
    };
  };

  return (
    <div className="canvas-pad-container">
      <div className="canvas-header">
        <span className="canvas-title">Practice Canvas</span>
        <div className="canvas-controls">
          <button 
            type="button"
            className="icon-btn" 
            onClick={() => setShowGuide(prev => !prev)}
            title={showGuide ? "Hide Tracing Guide" : "Show Tracing Guide"}
          >
            {showGuide ? <EyeOff size={16} /> : <Eye size={16} />}
            <span>Guide</span>
          </button>
          
          <button 
            type="button"
            className="icon-btn" 
            onClick={undo}
            disabled={history.length <= 1}
            title="Undo Last Stroke"
          >
            <RotateCcw size={16} />
            <span>Undo</span>
          </button>

          <button 
            type="button"
            className="icon-btn danger-hover" 
            onClick={clearCanvas}
            title="Clear Canvas"
          >
            <Trash2 size={16} />
            <span>Clear</span>
          </button>
        </div>
      </div>

      <div className="canvas-wrapper">
        {/* Practice Notebook Cross-Grid */}
        <div className="grid-overlay">
          <div className="grid-line vertical"></div>
          <div className="grid-line horizontal"></div>
        </div>

        {/* Tracing Guide (Large Kanji) */}
        {showGuide && (
          <div className="canvas-guide-kanji">
            {kanji}
          </div>
        )}

        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          className="drawing-canvas"
        />
      </div>

      <div className="canvas-footer">
        <div className="color-presets">
          <span className="label">Ink Color:</span>
          {["#20C997", "#FF6B6B", "#4D96FF", "#ECEFF4"].map((color) => (
            <button
              key={color}
              type="button"
              className={`color-dot ${brushColor === color ? "active" : ""}`}
              style={{ backgroundColor: color }}
              onClick={() => setBrushColor(color)}
            />
          ))}
        </div>

        <div className="brush-slider-container">
          <span className="label">Brush Size:</span>
          <input
            type="range"
            min="2"
            max="16"
            value={brushSize}
            onChange={(e) => setBrushSize(Number(e.target.value))}
            className="brush-slider"
          />
          <span className="brush-size-val">{brushSize}px</span>
        </div>
      </div>
    </div>
  );
};
