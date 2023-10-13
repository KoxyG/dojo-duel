import React, { useRef, useEffect } from "react";
import { resources } from "./Resources";



interface CanvasProps {
  width: number;
  height: number;
  skyscraperHeights: number[];
  skyscraperColor: string[];
}

const Canvas = ({
  width,
  height,
  skyscraperHeights,
  skyscraperColor,
}: CanvasProps) => {

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawSkyscrapers = (ctx: CanvasRenderingContext2D) => {
    const skyscraperWidth = 160; 
    const spacing = 10; 
    const startX =
      (width - (skyscraperWidth + spacing) * skyscraperHeights.length) / 2;

    // Set clipping region outside the loop
    ctx.beginPath();
    ctx.rect(0, 0, width, height)
    ctx.clip();

    skyscraperHeights.forEach((skyscraperHeight, index) => {
      const x = startX + index * (skyscraperWidth + spacing);

      const skyscraperImage = resources.images.skyscraper.image;

      // Draw each skyscraper with a specific height
      ctx.fillStyle = skyscraperColor[index];
      ctx.fillRect(
        x,
        height - skyscraperHeight,
        skyscraperWidth,
        skyscraperHeight
      );
      
      // Checking if the image is loaded
      if (resources.images.skyscraper.isLoaded) {
        // Draw the skyscraper image
        ctx.drawImage(
          skyscraperImage,
          x,
          height - skyscraperHeight,
          skyscraperWidth,
          skyscraperHeight
        );
        // Reset the clipping region after drawing
        ctx.restore();
      }
      
     
    });
  };

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      if (ctx) {
        drawSkyscrapers(ctx);
      }
    }
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} height={height} width={width}></canvas>
    </div>
  );
};

Canvas.defaultProps = {
  width: window.innerWidth,
  height: window.innerHeight,
  skyscraperHeights: [350, 200, 250, 180, 350, 220, 150, 350],
  skyscraperColor: [
    "#04a9ac",
    "#ac0303",
    "#04a9ac",
    "#ac0303",
    "#04a9ac",
    "#ac0303",
    "#04a9ac",
    "#ac0303",
  ],
};

export default Canvas;
