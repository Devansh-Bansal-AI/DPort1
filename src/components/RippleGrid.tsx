import React, { useRef, useEffect, useCallback } from "react";
import { ACCENT_COLOR } from "../utils/constants";

const RippleGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = document.body.scrollHeight;

    let animation: number;
    let t = 0;

    const render = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      ctx.strokeStyle = ACCENT_COLOR + "55";

      for (let y = 0; y < height; y += 40) {
        ctx.beginPath();
        for (let x = 0; x < width; x += 40) {
          const wave = Math.sin((x + t * 2) * 0.01) * 5;
          ctx.lineTo(x, y + wave);
        }
        ctx.stroke();
      }

      t += 1;
      animation = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animation);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 opacity-20 pointer-events-none" />;
};

export default RippleGrid;
