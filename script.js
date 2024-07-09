const snowContainer = document.querySelector('.snow-container');
const numFlakes = 100;
const audio = document.getElementById('spooky-audio');

function createSnowflake(x, y) {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.width = `${Math.random() * 5 + 2}px`;
    snowflake.style.height = snowflake.style.width;
    snowflake.style.left = `${x}px`;
    snowflake.style.top = `${y}px`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s, ${Math.random() * 1 + 1.5}s`;
    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 2000); // Remove the snowflake after 2 seconds
}

document.addEventListener('mousemove', (e) => {
    createSnowflake(e.clientX, e.clientY);
});

function createFallingSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.width = `${Math.random() * 5 + 2}px`;
    snowflake.style.height = snowflake.style.width;
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 5 + 5}s, ${Math.random() * 3 + 3}s`;
    snowContainer.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 10000); // Remove the snowflake after 10 seconds
}

setInterval(createFallingSnowflake, 200); 

function goToNextPage() {
    window.location.href = 'kl/main.html'; 
}

document.addEventListener('click', () => {
    audio.play();
});
