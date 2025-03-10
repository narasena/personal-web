"use client";

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
    let animationFrameId: number; // Stores the id returned by requestAnimationFrame

    // Improved lerp with wrap-around for angles
    const lerpAngle = (start: number, end: number, t: number) => {
      let diff = (end - start) % 360;
      if (diff > 180) diff -= 360;
      if (diff < -180) diff += 360;
      return (start + diff * t) % 360;
    };

    const drawGradient = (offsetX: number) => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smoothly interpolate to target angle
      currentAngle = lerpAngle(currentAngle, targetAngle, 0.08);
      const angleInRadians = currentAngle * (Math.PI / 180);

      // Calculate gradient endpoints with bounds
      const gradientLength = Math.max(canvas.width, canvas.height) * 1.5;
      const xOffset = Math.cos(angleInRadians) * gradientLength;
      const yOffset = Math.sin(angleInRadians) * gradientLength;

      // Adjust offset based on angle
      const verticalFactor = Math.abs(Math.sin(angleInRadians));
      const horizontalFactor = Math.abs(Math.cos(angleInRadians));

      // Declare as const because these values won't be reassigned
      const startX = offsetX * horizontalFactor + (canvas.width / 2) * (1 - horizontalFactor);
      const startY = offsetX * verticalFactor + (canvas.height / 2 - yOffset / 2) * (1 - verticalFactor);
      const endX = startX + xOffset * horizontalFactor;
      const endY = startY + yOffset + canvas.height * verticalFactor;

      const gradient = ctx.createLinearGradient(startX, startY, endX, endY);

      // Cyberpunk gradient colors
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
      const offsetX = (normalizedSin + 1) * canvas.width * 0.5;
      const currentDirection = Math.cos(frame * 0.02) > 0 ? 1 : -1;

      if (currentDirection !== lastDirection) {
        bounceCount++;
        targetAngle = bounceCount * 45;
        lastDirection = currentDirection;
      }

      drawGradient(offsetX);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

export default AnimatedGradientBounced;
