document.addEventListener("DOMContentLoaded", () => {
  // ---------- Slide Show ----------
  let slideIndex = 0;
  const slides = document.getElementsByClassName("mySlides");
  if (slides.length > 0) {
    function showSlides() {
      for (let slide of slides) slide.style.display = "none";
      slideIndex = (slideIndex % slides.length) + 1;
      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 5000);
    }
    showSlides();
  }

  // ---------- Navbar & Typing ----------
  $(document).ready(function () {
    $(window).scroll(function () {
      $(".navbar").toggleClass("sticky", this.scrollY > 20);
    });

    $(".menu-btn").click(function () {
      $(".navbar .menu").toggleClass("active");
      $(".menu-btn i").toggleClass("active");
    });

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

    $(".carousel").owlCarousel({
      margin: 20,
      loop: true,
      autoplayTimeout: 7000,
      autoplayHoverPause: true,
      responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 3 } },
    });
  });

  // ---------- AOS ----------
  AOS.init({ once: true });

  // ---------- Remove hash ----------
  const removeHash = () => {
    history.replaceState(
      null,
      document.title,
      window.location.pathname + window.location.search
    );
  };
  window.addEventListener("hashchange", removeHash);
  if (window.location.hash) removeHash();

  // ---------- Car Animation ----------
  const car = document.querySelector(".car");
  if (car) {
    let targetY = 0,
      currentY = 0;
    window.addEventListener("scroll", () => {
      targetY = -(window.scrollY * 0.8);
    });
    function animateCar() {
      currentY += (targetY - currentY) * 0.1;
      car.style.transform = `rotate(0deg) translateY(${currentY}px)`;
      requestAnimationFrame(animateCar);
    }
    animateCar();
  }

  // ---------- Particles ----------
  if (document.getElementById("particles-js") && window.particlesJS) {
    particlesJS("particles-js", {
      particles: {
        number: { value: 40, density: { enable: true, value_area: 800 } },
        color: { value: "#54a0ff" },
        shape: { type: "circle" },
        opacity: {
          value: 0.6,
          random: true,
          anim: { enable: true, speed: 1, opacity_min: 0.2 },
        },
        size: {
          value: 4,
          random: true,
          anim: { enable: true, speed: 3, size_min: 1 },
        },
        move: {
          enable: true,
          speed: 1.5,
          random: true,
          straight: false,
          out_mode: "out",
        },
      },
      interactivity: {
        detect_on: "window",
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "push" },
        },
        modes: {
          grab: { distance: 150, line_linked: { opacity: 0.4 } },
          push: { particles_nb: 4 },
        },
      },
      retina_detect: true,
    });
  }
});
