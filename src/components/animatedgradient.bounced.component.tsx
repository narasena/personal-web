"use client"

import { useEffect, useRef } from "react";

const AnimatedGradientBounced = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
  
    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
  
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
  
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  
      let frame = 0;
      let currentAngle = 0;
      let targetAngle = 0;
      let lastDirection = 1;
      let bounceCount = 0;
  
      // Improved lerp with wrap-around for angles
      const lerpAngle = (start: number, end: number, t: number) => {
        // Find the shortest path between angles
        let diff = (end - start) % 360;
        if (diff > 180) diff -= 360;
        if (diff < -180) diff += 360;
        
        // Apply lerp with the shortest path
        return (start + diff * t) % 360;
      };
  
      const drawGradient = (offsetX: number) => {
        if (!ctx) return;
  
        ctx.clearRect(0, 0, canvas.width, canvas.height);
  
        // Smoothly interpolate to target angle
        currentAngle = lerpAngle(currentAngle, targetAngle, 0.08); // Increased speed slightly
        const angleInRadians = currentAngle * (Math.PI / 180);
  
        // Calculate gradient endpoints with bounds
        const gradientLength = Math.max(canvas.width, canvas.height) * 1.5; // Extended length for smoother transitions
        const xOffset = Math.cos(angleInRadians) * gradientLength;
        const yOffset = Math.sin(angleInRadians) * gradientLength;
  
        // Adjust offset based on angle
        let startX, startY, endX, endY;
        
        // Smoother transition near vertical angles
        const verticalFactor = Math.abs(Math.sin(angleInRadians));
        const horizontalFactor = Math.abs(Math.cos(angleInRadians));
        
        // Blend between vertical and horizontal movements
        startX = offsetX * horizontalFactor + canvas.width/2 * (1 - horizontalFactor);
        startY = offsetX * verticalFactor + (canvas.height/2 - yOffset/2) * (1 - verticalFactor);
        endX = startX + xOffset * horizontalFactor;
        endY = startY + yOffset + canvas.height * verticalFactor;
  
        const gradient = ctx.createLinearGradient(
          startX, startY,
          endX, endY
        );
  
        {/* cyberpunk */}
        // gradient.addColorStop(0, "#0A0A0A"); 
        // gradient.addColorStop(0.33, "#00FFB7");
        // gradient.addColorStop(0.66, "#FF00FF"); 
        // gradient.addColorStop(1, "#0A0A0A");
  
        gradient.addColorStop(0, "#a960ee"); // Purple
        gradient.addColorStop(0.33, "#ff333d"); // Red
        gradient.addColorStop(0.66, "#90e0ff"); // Blue
        gradient.addColorStop(1, "#ffcb57"); // Yellow
  
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      };
  
      const animate = () => {
        frame += 0.5;
        const normalizedSin = Math.sin(frame * 0.02);
        
        // Smooth transition between vertical and horizontal offsets
        const offsetX = (normalizedSin + 1) * canvas.width * 0.5;
  
        // Detect bounce by checking direction change
        const currentDirection = Math.cos(frame * 0.02) > 0 ? 1 : -1;
  
        if (currentDirection !== lastDirection) {
          bounceCount++;
          // Calculate new target angle without resetting at 360
          targetAngle = bounceCount * 45;
          lastDirection = currentDirection;
        }
  
        drawGradient(offsetX);
        requestAnimationFrame(animate);
      };
  
      animate();
  
      return () => cancelAnimationFrame(animate as any);
    }, []);
  
    return (
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />
    );
  };
  
  export default AnimatedGradientBounced;