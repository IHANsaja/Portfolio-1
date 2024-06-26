let banner = document.querySelector('.banner');
let canvas = document.getElementById('spidermanEffect');
let context = canvas.getContext('2d');

canvas.width = banner.offsetWidth;
canvas.height = banner.offsetHeight;

let dots = [];
let colors = ['#0d2818', '#04471c', '#058c42', '#d3d9d4', '#ofa4af'];

for (let i = 0; i < 100; i++) {
    dots.push({
        x: Math.floor(Math.random() * canvas.width), // x axis position
        y: Math.floor(Math.random() * canvas.height), // y axis position
        size: Math.random() * 3 + 5, // size of the circle
        color: colors[Math.floor(Math.random() * 5)]
    });
}

const drawDots = () => {
    dots.forEach(dot => { 
        context.fillStyle = dot.color; 
        context.beginPath();
        context.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2); 
        context.fill();
    });
};

const drawLines = (mouse) => {
    dots.forEach(dot => {
        let dist = Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2);
        if (dist < 250) {
            context.strokeStyle = dot.color;
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(dot.x, dot.y);
            context.lineTo(mouse.x, mouse.y);
            context.stroke();
        }
    });
};

const clearCanvas = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawDots();
};

drawDots();

banner.addEventListener('mousemove', (event) => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawDots();
    
    let rect = canvas.getBoundingClientRect();
    let mouse = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
    
    drawLines(mouse);
});

banner.addEventListener('mouseleave', () => {
    clearCanvas(); // Clear the canvas when the cursor leaves the banner
});

document.getElementById('downloadBtn').addEventListener('click', function() {
    var button = this;
    button.classList.add('loading');

    // Simulate download process with a timeout (e.g., 3 seconds)
    setTimeout(function() {
        button.classList.remove('loading');
        // Trigger the actual download (replace with actual CV link)
        window.location.href = 'path/to/your/cv.pdf';
    }, 3000);
});


document.getElementById("downloadBtn").addEventListener("click", function() {
    window.location.href = "https://github.com/IHANsaja";
});