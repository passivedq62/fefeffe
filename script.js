document.addEventListener('DOMContentLoaded', () => {
    const trail = [];
    const trailLength = 20;

    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r},${g},${b})`;
    }

    for (let i = 0; i < trailLength; i++) {
        const div = document.createElement('div');
        div.classList.add('trail');
        div.style.backgroundColor = getRandomColor();
        document.body.appendChild(div);
        trail.push(div);
    }

    let mouseX = -100;
    let mouseY = -100;

    document.addEventListener('mousemove', (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
    });

    function animateTrail() {
        let x = mouseX;
        let y = mouseY;

        trail.forEach((div, index) => {
            setTimeout(() => {
                div.style.left = `${x}px`;
                div.style.top = `${y}px`;
                div.style.opacity = (trailLength - index) / trailLength;
            }, index * 30);
        });

        requestAnimationFrame(animateTrail);
    }

    animateTrail();
});
