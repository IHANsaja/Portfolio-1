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
    clearCanvas(); 
});

const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeIcon = document.querySelector('.close-icon');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

closeIcon.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});



document.getElementById("downloadBtn").addEventListener("click", function() {
    window.location.href = "https://github.com/IHANsaja";
});

function moveLeft() {
  const slides = document.querySelectorAll('.certify .slide');
  const labels = document.querySelectorAll('.certify input[type="radio"]');
    
  let checkedIndex = -1;
    
  // Find the currently checked slide
  for (let i = 0; i < labels.length; i++) {
    if (labels[i].checked) {
      checkedIndex = i;
      break;
    }
  }
    
  // If not the first slide, move to the previous slide
  if (checkedIndex > 0) {
    labels[checkedIndex - 1].checked = true;
  } else {
    // Otherwise, wrap around to the last slide
    labels[labels.length - 1].checked = true;
  }
}
  
  // JavaScript function to move to the next slide
function moveRight() {
  const slides = document.querySelectorAll('.certify .slide');
  const labels = document.querySelectorAll('.certify input[type="radio"]');
    
  let checkedIndex = -1;
    
  // Find the currently checked slide
  for (let i = 0; i < labels.length; i++) {
    if (labels[i].checked) {
      checkedIndex = i;
      break;
    }
  }
    
  // If not the last slide, move to the next slide
  if (checkedIndex < labels.length - 1) {
    labels[checkedIndex + 1].checked = true;
  } else {
    // Otherwise, wrap around to the first slide
    labels[0].checked = true;
  }
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // You can add validation or AJAX submission here
  // For now, let's just log the form data
  const formData = new FormData(this);
  formData.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });

  // Optionally, clear the form after submission
  this.reset();
});


//Conatact form

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission
  
  // Fetch form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const contactNo = document.getElementById('contact-no').value;
  const message = document.getElementById('message').value;

  // Construct email content
  const subject = 'New Contact Form Submission';
  const body = `
    Name: ${name}
    Email: ${email}
    Contact No: ${contactNo}
    Message: ${message}
  `;

  // Encode email content for URL
  const encodedBody = encodeURIComponent(body);

  // Construct mailto URL
  const mailtoUrl = `mailto:ihanahansaja5@gmail.com?subject=${subject}&body=${encodedBody}`;

  // Open mail client
  window.open(mailtoUrl);

  // Optionally, clear the form after submission
  this.reset();
});

//onscroll content load animation
const scrollElements = document.querySelectorAll(".js-scroll");

        const elementInView = (el, offset = 100) => {
            const elementTop = el.getBoundingClientRect().top;
            return (
                elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset
            );
        };

        const elementOutofView = (el, offset = 100) => {
            const elementBottom = el.getBoundingClientRect().bottom;
            return (
                elementBottom > (window.innerHeight || document.documentElement.clientHeight) + offset
            );
        };

        const displayScrollElement = (element) => {
            element.classList.add("scrolled");
        };

        const hideScrollElement = (element) => {
            element.classList.remove("scrolled");
        };

        const handleScrollAnimation = () => {
            scrollElements.forEach((el) => {
                if (elementInView(el, 100)) {
                    displayScrollElement(el);
                } else if (elementOutofView(el, 100)) {
                    hideScrollElement(el);
                }
            });
        };

        window.addEventListener("scroll", () => { 
            handleScrollAnimation();
        });
        
        // Initial check in case elements are in view on load
        handleScrollAnimation();