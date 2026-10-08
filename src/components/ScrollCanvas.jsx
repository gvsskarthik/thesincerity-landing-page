import React, { useEffect, useRef } from 'react';

export default function ScrollCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let scrollY = window.scrollY || 0;
    let lastScrollY = scrollY;
    let scrollVelocity = 0;

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleMouseMove = (e) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Particles
    const particleCount = Math.min(Math.floor(width / 24), 50);
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.4 + 0.25
      });
    }

    // 3D Isometric Cube definition
    const cubeSize = Math.min(width * 0.12, 105);
    const cubeVertices = [
      [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
      [-1, -1,  1], [1, -1,  1], [1, 1,  1], [-1, 1,  1]
    ];
    const cubeEdges = [
      [0, 1], [1, 2], [2, 3], [3, 0],
      [4, 5], [5, 6], [6, 7], [7, 4],
      [0, 4], [1, 5], [2, 6], [3, 7]
    ];

    let angleX = 0.4;
    let angleY = 0.6;
    let angleZ = 0.2;

    function project3D(x, y, z, cx, cy, fov) {
      const factor = fov / (fov + z);
      return { x: x * factor + cx, y: y * factor + cy };
    }

    function rotateX(p, angle) {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return [p[0], p[1] * cos - p[2] * sin, p[1] * sin + p[2] * cos];
    }

    function rotateY(p, angle) {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return [p[0] * cos + p[2] * sin, p[1], -p[0] * sin + p[2] * cos];
    }

    function rotateZ(p, angle) {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return [p[0] * cos - p[1] * sin, p[0] * sin + p[1] * cos, p[2]];
    }

    let animationId;
    function render() {
      ctx.clearRect(0, 0, width, height);

      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      const scrollSpeedFactor = Math.abs(scrollVelocity) * 0.03;
      angleX += 0.003 + scrollVelocity * 0.001;
      angleY += 0.005 + scrollSpeedFactor * 0.002;
      angleZ += 0.002;

      const obj1X = width * 0.84 + (mouseX - width / 2) * 0.03;
      const obj1Y = height * 0.35 + (mouseY - height / 2) * 0.03 - (scrollY * 0.12) % height;
      const actualObj1Y = ((obj1Y % height) + height) % height;

      const obj2X = width * 0.14 + (mouseX - width / 2) * 0.02;
      const obj2Y = height * 0.72 - (scrollY * 0.18) % height;
      const actualObj2Y = ((obj2Y % height) + height) % height;

      // Draw Cube
      const transformedVerts = cubeVertices.map(v => {
        let p = [v[0] * cubeSize, v[1] * cubeSize, v[2] * cubeSize];
        p = rotateX(p, angleX);
        p = rotateY(p, angleY);
        p = rotateZ(p, angleZ);
        return project3D(p[0], p[1], p[2], obj1X, actualObj1Y, 400);
      });

      ctx.strokeStyle = 'rgba(2, 132, 199, 0.28)';
      ctx.lineWidth = 1.2;
      cubeEdges.forEach(edge => {
        const p1 = transformedVerts[edge[0]];
        const p2 = transformedVerts[edge[1]];
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      });

      transformedVerts.forEach(v => {
        ctx.fillStyle = 'rgba(2, 132, 199, 0.6)';
        ctx.beginPath();
        ctx.arc(v.x, v.y, 2.5, 0, Math.PI * 2);
        ctx.fill();
      });

      // Rings
      const ringRadius = cubeSize * 0.9;
      ctx.strokeStyle = 'rgba(79, 70, 229, 0.2)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.ellipse(obj2X, actualObj2Y, ringRadius, ringRadius * 0.4, angleY * 0.8, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(2, 132, 199, 0.18)';
      ctx.beginPath();
      ctx.ellipse(obj2X, actualObj2Y, ringRadius * 1.3, ringRadius * 0.5, -angleX * 0.6, 0, Math.PI * 2);
      ctx.stroke();

      // Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy - scrollVelocity * 0.15;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = `rgba(15, 23, 42, ${p.alpha * 0.45})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const lineAlpha = (1 - dist / 130) * 0.14;
            ctx.strokeStyle = `rgba(2, 132, 199, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      scrollVelocity *= 0.92;
      animationId = requestAnimationFrame(render);
    }
    render();

    const handleScroll = () => {
      const currentY = window.scrollY || window.pageYOffset;
      scrollVelocity = currentY - lastScrollY;
      lastScrollY = currentY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.85
      }}
    />
  );
}
