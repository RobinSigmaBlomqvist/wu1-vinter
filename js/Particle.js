let particleImage = null;

// Load image once at startup
const img = new Image();
img.src = 'bilder/epstein.png';
img.onload = () => {
  particleImage = img;
};

class Particle {
  constructor(canvas) {
    this.canvas = canvas;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height - canvas.height;
    this.vx = (Math.random() - 0.5) * 2;
    this.vy = (Math.random() * 1 + 0.5) * (speed / 1000);
    this.size = Math.random() * 100 + 50;
  }

  update() {
    this.y += this.vy;
    this.x += this.vx;

    if (this.y > this.canvas.height) {
      this.y = -10;
      this.x = Math.random() * this.canvas.width;
    }
  }

  draw(ctx) {
    if (particleImage) {
      ctx.drawImage(particleImage, this.x, this.y, this.size, this.size);
    } else {
      // Fallback circle while image loads
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}