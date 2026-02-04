document.addEventListener("mousemove", (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    document.body.style.backgroundPosition =
        `${x * 100}% ${y * 100}%`;
});

// Floating particles
for (let i = 0; i < 40; i++) {
    const particle = document.createElement("div");
    particle.style.position = "fixed";
    particle.style.width = "6px";
    particle.style.height = "6px";
    particle.style.background = "#00ffcc";
    particle.style.borderRadius = "50%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.opacity = Math.random();
    particle.style.animation = `floatParticle ${5 + Math.random()*10}s linear infinite`;
    document.body.appendChild(particle);
}


const style = document.createElement("style");
style.innerHTML = `
@keyframes floatParticle {
    0% { transform: translateY(0); }
    100% { transform: translateY(-100vh); }
}`;
document.head.appendChild(style);

