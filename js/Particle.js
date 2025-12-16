let particleImage = null;

const img = new Image();
img.src = encodeURI('bilder/snowflake.png');
img.onload = () => {
  particleImage = img;
  console.log('Particle image loaded:', img.src);
};
img.onerror = (e) => {
  console.error('Failed to load particle image:', img.src, e);
};

class Particle {
  constructor(canvas) {
    this.canvas = canvas;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * -canvas.height;
    const effectiveSpeed = (typeof speed === 'number') ? speed : 1000;
    this.vx = (Math.random() - 0.5) * 1.2;
    this.vy = (Math.random() * 0.8 + 0.2) * (effectiveSpeed / 1000);
    this.size = Math.random() * 30 + 8;
  }

  update() {
    this.y += this.vy;
    this.x += this.vx;

    if (this.y > this.canvas.height + 20) {
      this.y = -20;
      this.x = Math.random() * this.canvas.width;
    }
    if (this.x < -50) this.x = this.canvas.width + 50;
    if (this.x > this.canvas.width + 50) this.x = -50;
  }

  draw(ctx) {
    if (particleImage) {
      ctx.drawImage(particleImage, this.x, this.y, this.size, this.size);
    } else {
      ctx.fillStyle = 'rgba(255,255,255,0.9)';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}