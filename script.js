// Typing animation
const typingElement = document.getElementById("typing");
const words = ["Senior Executive", "Sales Executive", "Software Test Engineer"];
let wordIndex = 0;
let charIndex = 0;
let typing = true;

function type() {
  if (typing) {
    if (charIndex < words[wordIndex].length) {
      typingElement.textContent += words[wordIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100);
    } else {
      typing = false;
      setTimeout(type, 1500);
    }
  } else {
    if (charIndex > 0) {
      typingElement.textContent = words[wordIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(type, 50);
    } else {
      typing = true;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 300);
    }
  }
}
type();

// Optional: Background canvas particles
const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const points = Array.from({length: 70}, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  vx: (Math.random() - 0.5),
  vy: (Math.random() - 0.5)
}));

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let p of points) {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
    ctx.fillStyle = "#999";
    ctx.fill();

    for (let q of points) {
      let dx = p.x - q.x;
      let dy = p.y - q.y;
      let dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(q.x, q.y);
        ctx.strokeStyle = "rgba(0,0,0,0.1)";
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(draw);
}
draw();
