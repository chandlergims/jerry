import { useEffect, useRef } from "react";
import './StickFigure.css';

const StickFigure = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const hatRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Create hat image
    const hatImage = new Image();
    hatImage.src = "/hat.png";
    hatRef.current = hatImage;

    hatImage.onload = () => {
      drawStickman();
    };

    const drawStickman = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Draw hat
      if (hatRef.current) {
        const hatWidth = 160; // Even bigger hat width
        const hatHeight = hatWidth * (hatRef.current.height / hatRef.current.width);
        ctx.drawImage(
          hatRef.current, 
          centerX - hatWidth / 2 + 3, // Moved slightly to the right
          centerY - 154, // Positioned higher
          hatWidth, 
          hatHeight
        );
      }

      // Head
      ctx.beginPath();
      ctx.arc(centerX, centerY - 50, 20, 0, Math.PI * 2);
      ctx.stroke();
      
      // Eyes (dots)
      ctx.beginPath();
      ctx.arc(centerX - 7, centerY - 55, 2, 0, Math.PI * 2);
      ctx.fillStyle = "black";
      ctx.fill();
      
      ctx.beginPath();
      ctx.arc(centerX + 7, centerY - 55, 2, 0, Math.PI * 2);
      ctx.fillStyle = "black";
      ctx.fill();
      
      // Smile
      ctx.beginPath();
      ctx.arc(centerX, centerY - 45, 10, 0.1 * Math.PI, 0.9 * Math.PI);
      ctx.stroke();

      // Body
      ctx.beginPath();
      ctx.moveTo(centerX, centerY - 30);
      ctx.lineTo(centerX, centerY + 30);
      ctx.stroke();

      // Arms
      ctx.beginPath();
      ctx.moveTo(centerX - 25, centerY - 10);
      ctx.lineTo(centerX + 25, centerY - 10);
      ctx.stroke();

      // Legs
      ctx.beginPath();
      ctx.moveTo(centerX, centerY + 30);
      ctx.lineTo(centerX - 20, centerY + 60);
      ctx.moveTo(centerX, centerY + 30);
      ctx.lineTo(centerX + 20, centerY + 60);
      ctx.stroke();
    };

    // Handle window resize
    const handleResize = () => {
      canvas.width = 300;
      canvas.height = 300;
      drawStickman();
    };

    handleResize(); // Initial sizing
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="stick-figure-container">
      <canvas ref={canvasRef} className="stick-figure-canvas"></canvas>
    </div>
  );
};

export default StickFigure;
