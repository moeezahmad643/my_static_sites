const particlesContainer = document.getElementById("particles-container");
const particleCount = 200;
const particles = [];

// Create particles
for (let i = 0; i < particleCount; i++) {
  const particle = document.createElement("div");
  particle.className = "particle";

  const size = Math.random() * 3 + 1;
  const opacity = Math.random() * 0.5 + 0.1;
  const hue = Math.random() * 30 + 20; // Orange color range (20-50)

  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.opacity = opacity;
  particle.style.backgroundColor = `100%, hsl(${hue}, 50%)`;
  particle.style.borderRadius = "50%";

  const x = Math.random() * 100;
  const y = Math.random() * 100;

  particle.style.position = "absolute";
  particle.style.top = `${y}%`;
  particle.style.left = `${x}%`;

  particles.push({
    element: particle,
    x,
    y,
    baseX: x,
    baseY: y,
    speed: Math.random() * 0.2 + 0.05,
    angle: Math.random() * Math.PI * 2,
    radius: Math.random() * 10 + 5,
    mouseInfluence: Math.random() * 0.8 + 0.7, // Increased influence
  });

  particlesContainer.appendChild(particle);
}

// Mouse tracking with stronger effect
let mouseX = 0;
let mouseY = 0;
let mouseActive = false;
let mouseDX = 0;
let mouseDY = 0;
let lastMouseX = 0;
let lastMouseY = 0;

document.addEventListener("mousemove", (event) => {
  mouseX = (event.clientX / window.innerWidth) * 100;
  mouseY = (event.clientY / window.innerHeight) * 100;
  mouseDX = (event.clientX - lastMouseX) * 0.25; // Increased multiplier
  mouseDY = (event.clientY - lastMouseY) * 0.25;
  mouseActive = true;
  lastMouseX = event.clientX;
  lastMouseY = event.clientY;
});

document.addEventListener("mouseleave", () => {
  mouseActive = false;
});

// Enhanced animation loop
function animateParticles() {
  particles.forEach((particle) => {
    // Continuous motion
    particle.angle += particle.speed * 0.01;
    const baseX = particle.baseX + Math.cos(particle.angle) * particle.radius;
    const baseY = particle.baseY + Math.sin(particle.angle) * particle.radius;

    // Stronger mouse effects
    let targetX = baseX;
    let targetY = baseY;

    if (mouseActive) {
      const dx = mouseX - baseX;
      const dy = mouseY - baseY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Increased mouse influence range and strength
      if (distance < 40) {
        // Increased range
        const force = ((40 - distance) / 40) * particle.mouseInfluence;
        targetX = baseX + dx * force * 0.3; // Increased strength
        targetY = baseY + dy * force * 0.3;

        // Add extra push from mouse movement direction
        targetX += mouseDX * 0.05 * particle.mouseInfluence;
        targetY += mouseDY * 0.05 * particle.mouseInfluence;
      }
    }

    // Smoother movement with stronger response
    particle.x += (targetX - particle.x) * 0.1; // Faster response
    particle.y += (targetY - particle.y) * 0.1;

    particle.element.style.left = `${particle.x}%`;
    particle.element.style.top = `${particle.y}%`;

    // More dramatic pulsing
    const scale = 1 + Math.sin(Date.now() * 0.001 * particle.speed) * 0.2;
    particle.element.style.transform = `scale(${scale}) translate(${
      mouseDX * 0.1
    }px, ${mouseDY * 0.1}px)`;
  });

  requestAnimationFrame(animateParticles);
}

animateParticles();
