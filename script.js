// ---------------- Slide Show ----------------
let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("mySlides");

  // Hide all slides
  for (let slide of slides) {
    slide.style.display = "none";
  }

  // Move to next slide
  slideIndex = (slideIndex % slides.length) + 1;
  slides[slideIndex - 1].style.display = "block";

  // Change image every 5 seconds
  setTimeout(showSlides, 5000);
}

// ---------------- Navbar & Typing ----------------
$(document).ready(function () {
  // Sticky navbar on scroll
  $(window).scroll(function () {
    $(".navbar").toggleClass("sticky", this.scrollY > 20);
  });

  // Toggle menu/navbar
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // Typing animation
  new Typed(".typing", {
    strings: ["Master Every Turn with Maneuver Driving School"],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true,
  });

  new Typed(".typing-2", {
    strings: [
      "We provide expert driving lessons with personalized training at unbeatable value!",
    ],
    typeSpeed: 60,
    backSpeed: 60,
    loop: false,
  });

  // Owl carousel
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeout: 7000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1, nav: false },
      600: { items: 2, nav: false },
      1000: { items: 3, nav: false },
    },
  });
});

// ---------------- AOS Init ----------------
AOS.init({ once: true });

// ---------------- Close nav when clicking menu item ----------------
document.addEventListener("click", (e) => {
  if (e.target.closest(".menu")) {
    toggleNav();
  }
});

// ---------------- Remove hash from URL ----------------
document.addEventListener("DOMContentLoaded", () => {
  const removeHash = () => {
    history.replaceState(
      null,
      document.title,
      window.location.pathname + window.location.search
    );
  };

  window.addEventListener("hashchange", removeHash);
  if (window.location.hash) removeHash();
});

// ---------------- Car Animation ----------------
const car = document.querySelector(".car");
let targetY = 0;
let currentY = 0;

window.addEventListener("scroll", () => {
  targetY = -(window.scrollY * 0.8); // adjust speed here
});

function animateCar() {
  currentY += (targetY - currentY) * 0.1; // smooth easing
  car.style.transform = `rotate(0deg) translateY(${currentY}px)`;
  requestAnimationFrame(animateCar);
}

animateCar();
