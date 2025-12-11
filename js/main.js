/* Om du vill ändra snöfärgen */
const color = [255, 255, 255];
/* justera hur snabbt snön faller */
const speed = 10000;

/* Ändra här nedanför på egen risk */

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function init() {
  particles = [];
  for (let i = 0; i < 50; i++) {
    particles.push(new Particle(canvas));
  }
  console.log('Particles created:', particles.length);
  console.log('Image loaded:', particleImage !== null);
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  particles.forEach(p => {
    p.update();
    p.draw(ctx);
  });
  
  requestAnimationFrame(animate);
}

init();
animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

/* Ladda in text från URL-parametrar */
const getQueryParams = () => {
  const params = new URLSearchParams(window.location.search);
  const title = params.get('title');
  const message = params.get('message');
  return { title, message };
};

const { title, message } = getQueryParams();
console.log(`Title: ${title}, Message: ${message}`);

if (title || message) {
  const titleElement = document.querySelector("#title");
  if (titleElement) titleElement.textContent = title;
  const messageElement = document.querySelector("#message");
  if (messageElement) messageElement.textContent = message;
}
