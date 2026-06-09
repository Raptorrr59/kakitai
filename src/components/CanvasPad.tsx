import React, { useRef, useState, useEffect } from "react";
import { Trash2, RotateCcw, RotateCw, Eye, EyeOff, Play, Pause, Check } from "lucide-react";

interface CanvasPadProps {
  kanji: string;
  strokeCount?: number;
  onStrokeDrawn?: () => void;
}

export const CanvasPad: React.FC<CanvasPadProps> = ({ kanji, strokeCount, onStrokeDrawn }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [showGuide, setShowGuide] = useState(true);
  const [brushSize, setBrushSize] = useState(6);
  const [brushColor, setBrushColor] = useState("#D65A3C"); // Vermilion ink (default)
  const [history, setHistory] = useState<string[]>([]); // Saves dataURLs for undo
  const [redoHistory, setRedoHistory] = useState<string[]>([]); // Saves dataURLs for redo

  // KanjiVG SVG guide states
  const [svgPaths, setSvgPaths] = useState<{ id: string; d: string }[]>([]);
  const [svgNumbers, setSvgNumbers] = useState<{ transform: string; text: string }[]>([]);
  const [animatingIndex, setAnimatingIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showNumbers, setShowNumbers] = useState<boolean>(true);

  // Expected stroke count: fall back to svgPaths.length if strokeCount prop is not provided or 0
  const expectedStrokes = strokeCount || svgPaths.length || 0;
  const currentStrokes = history.length > 0 ? history.length - 1 : 0;
  const strokeMatch = expectedStrokes > 0 && currentStrokes === expectedStrokes;

  // Sizing & Coordinates Helpers
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
      y: clientY - rect.top,
    };
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = contextRef.current;
    if (!canvas || !context) return;

    context.clearRect(0, 0, canvas.width, canvas.height);
    
    // Save cleared state
    const clearedState = canvas.toDataURL();
    setHistory([clearedState]);
    setRedoHistory([]);
  };

  const undo = () => {
    if (history.length <= 1) return; // Keep initial blank canvas
    
    const canvas = canvasRef.current;
    const context = contextRef.current;
    if (!canvas || !context) return;

    const current = history[history.length - 1];
    setRedoHistory((prev) => [...prev, current]);

    const newHistory = history.slice(0, -1);
    setHistory(newHistory);

    const previousStateUrl = newHistory[newHistory.length - 1];
    const img = new Image();
    img.src = previousStateUrl;
    img.onload = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      const rect = canvas.getBoundingClientRect();
      context.drawImage(img, 0, 0, rect.width, rect.height);
    };
  };

  const redo = () => {
    if (redoHistory.length === 0) return;

    const canvas = canvasRef.current;
    const context = contextRef.current;
    if (!canvas || !context) return;

    const nextStateUrl = redoHistory[redoHistory.length - 1];
    setRedoHistory((prev) => prev.slice(0, -1));
    setHistory((prev) => [...prev, nextStateUrl]);

    const img = new Image();
    img.src = nextStateUrl;
    img.onload = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      const rect = canvas.getBoundingClientRect();
      context.drawImage(img, 0, 0, rect.width, rect.height);
    };
  };

  // Drawing Events
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
      const stateUrl = canvas.toDataURL();
      setHistory((prev) => [...prev, stateUrl]);
      // Clear redo history when user makes a new stroke
      setRedoHistory([]);
    }

    if (onStrokeDrawn) onStrokeDrawn();
  };

  // Initialize Canvas
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Fetch SVG paths & numbers when kanji changes
  useEffect(() => {
    let active = true;

    // Reset canvas drawing and redo states on kanji change (wrapped in setTimeout to prevent ESLint set-state-in-effect error)
    setTimeout(() => {
      if (!active) return;
      clearCanvas();
      setSvgPaths([]);
      setSvgNumbers([]);
      setRedoHistory([]);
      setAnimatingIndex(null);
      setIsPlaying(false);
    }, 0);

    if (!kanji) return;

    const codePoint = kanji.codePointAt(0);
    if (!codePoint) return;
    const hex = codePoint.toString(16).toLowerCase().padStart(5, "0");
    const url = `https://cdn.jsdelivr.net/gh/kanjivg/kanjivg@master/kanji/${hex}.svg`;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Could not fetch SVG");
        return res.text();
      })
      .then((text) => {
        if (!active) return;
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, "image/svg+xml");
        
        // Extract paths
        const paths = Array.from(doc.querySelectorAll("path")).map((p) => ({
          id: p.getAttribute("id") || "",
          d: p.getAttribute("d") || "",
        }));

        // Extract numbers
        const texts = Array.from(doc.querySelectorAll("text")).map((t) => ({
          transform: t.getAttribute("transform") || "",
          text: t.textContent || "",
        }));

        setSvgPaths(paths);
        setSvgNumbers(texts);
      })
      .catch((err) => {
        console.warn("Failed to load KanjiVG SVG, using fallback text guide:", err);
      });

    return () => {
      active = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [kanji]);

  // Stroke Playback Animation Timer Loop
  useEffect(() => {
    if (!isPlaying || animatingIndex === null) return;

    const timer = setTimeout(() => {
      setAnimatingIndex((prev) => {
        if (prev === null) return null;
        if (prev < svgPaths.length - 1) {
          return prev + 1;
        } else {
          setIsPlaying(false);
          return null; // End animation, go back to static guide
        }
      });
    }, 1500); // 1.5 seconds per stroke drawing

    return () => clearTimeout(timer);
  }, [isPlaying, animatingIndex, svgPaths.length]);

  // Update stroke settings
  useEffect(() => {
    if (contextRef.current) {
      contextRef.current.strokeStyle = brushColor;
      contextRef.current.lineWidth = brushSize;
    }
  }, [brushColor, brushSize]);

  const togglePlayAnimation = () => {
    if (isPlaying) {
      setIsPlaying(false);
      setAnimatingIndex(null); // Reset to standard guide when stopping
    } else {
      setAnimatingIndex(0);
      setIsPlaying(true);
    }
  };

  return (
    <div className="canvas-pad-container">
      <div className="canvas-header">
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span className="canvas-title">Practice Canvas</span>
          {expectedStrokes > 0 && (
            <span className={`stroke-count-badge ${strokeMatch ? "match" : ""}`}>
              {strokeMatch && <Check size={12} strokeWidth={3} style={{ marginRight: "2px" }} />}
              {currentStrokes} / {expectedStrokes} Strokes
            </span>
          )}
        </div>
        <div className="canvas-controls">
          {svgPaths.length > 0 && (
            <>
              <button
                type="button"
                className={`icon-btn ${isPlaying ? "active" : ""}`}
                onClick={togglePlayAnimation}
                title={isPlaying ? "Stop Animation" : "Animate Stroke Order"}
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                <span>{isPlaying ? "Stop" : "Animate"}</span>
              </button>

              <button
                type="button"
                className={`icon-btn ${showNumbers ? "active" : ""}`}
                onClick={() => setShowNumbers((prev) => !prev)}
                title={showNumbers ? "Hide Stroke Numbers" : "Show Stroke Numbers"}
                disabled={!showGuide}
              >
                <Eye size={16} />
                <span>Numbers</span>
              </button>
            </>
          )}

          <button 
            type="button"
            className="icon-btn" 
            onClick={() => setShowGuide((prev) => !prev)}
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
            className="icon-btn" 
            onClick={redo}
            disabled={redoHistory.length === 0}
            title="Redo Last Stroke"
          >
            <RotateCw size={16} />
            <span>Redo</span>
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

        {/* Tracing Guide (KanjiVG SVG or Fallback Font Kanji) */}
        {showGuide && (
          svgPaths.length > 0 ? (
            <svg viewBox="0 0 109 109" className="kanji-svg-guide">
              <g>
                {svgPaths.map((path, idx) => {
                  const isCurrent = animatingIndex === idx;
                  const isPast = animatingIndex !== null && idx < animatingIndex;
                  const isFuture = animatingIndex !== null && idx > animatingIndex;
                  
                  let pathClass = "kanji-path-guide";
                  if (isCurrent) pathClass += " animating";
                  
                  return (
                    <path
                      key={path.id}
                      d={path.d}
                      pathLength="100"
                      className={pathClass}
                      style={{
                        display: isFuture ? "none" : "block",
                        opacity: isPast ? 0.35 : undefined,
                        stroke: isPast ? "var(--color-text-muted)" : undefined,
                      }}
                    />
                  );
                })}
              </g>
              {showNumbers && (
                <g>
                  {svgNumbers.map((num, idx) => {
                    const isFuture = animatingIndex !== null && idx > animatingIndex;
                    if (isFuture) return null;
                    return (
                      <text
                        key={idx}
                        transform={num.transform}
                        className="kanji-number-text"
                      >
                        {num.text}
                      </text>
                    );
                  })}
                </g>
              )}
            </svg>
          ) : (
            <div className="canvas-guide-kanji">
              {kanji}
            </div>
          )
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
          {["#D65A3C", "#2D6A78", "#C79A4E", "#5F8A75"].map((color) => (
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
