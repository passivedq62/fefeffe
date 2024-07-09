// Snowflake Animation
const canvas = document.getElementById('snow');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function random(min, max) {
    return Math.random() * (max - min) + min;
}

class Snowflake {
    constructor() {
        this.x = random(0, canvas.width);
        this.y = random(-10, -canvas.height);
        this.size = random(2, 4);
        this.speed = random(1, 3);
        this.opacity = random(0.5, 1);
    }

    update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
            this.x = random(0, canvas.width);
            this.y = random(-10, -canvas.height);
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
    }
}

const snowflakes = [];

function createSnowflakes() {
    for (let i = 0; i < 50; i++) {
        snowflakes.push(new Snowflake());
    }
}

function animateSnowflakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snowflakes.forEach(snowflake => {
        snowflake.update();
        snowflake.draw();
    });
    requestAnimationFrame(animateSnowflakes);
}

createSnowflakes();
animateSnowflakes();

// Snowflake Mouse Trail
const snowflakeTrail = document.querySelector('.snowflake-trail');

document.addEventListener('mousemove', (event) => {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = `${event.pageX}px`;
    snowflake.style.top = `${event.pageY}px`;
    snowflake.style.animationDuration = `${random(1, 3)}s`;
    snowflake.style.animationDelay = `${random(0, 1)}s`;
    snowflakeTrail.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 3000); // Remove snowflake after 3 seconds
});

// Visitor Count
let count = localStorage.getItem('visitorCount');

if (count === null) {
    count = 0;
} else {
    count = parseInt(count);
}

document.getElementById('visitor-count').textContent = count;

count++;
localStorage.setItem('visitorCount', count.toString());
