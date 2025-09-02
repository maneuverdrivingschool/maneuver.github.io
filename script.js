document.addEventListener("DOMContentLoaded", () => {
  let e = 0,
    t = document.getElementsByClassName("mySlides");
  if (t.length > 0) {
    function a() {
      for (let n of t) n.style.display = "none";
      (t[(e = (e % t.length) + 1) - 1].style.display = "block"),
        setTimeout(a, 5e3);
    }
    a();
  }
  $(document).ready(function () {
    $(window).scroll(function () {
      $(".navbar").toggleClass("sticky", this.scrollY > 20);
    }),
      $(".menu-btn").click(function () {
        $(".navbar .menu").toggleClass("active"),
          $(".menu-btn i").toggleClass("active");
      }),
      new Typed(".typing", {
        strings: ["Master Every Turn with Maneuver Driving School"],
        typeSpeed: 60,
        backSpeed: 60,
        loop: !0,
      }),
      new Typed(".typing-2", {
        strings: [
          "We provide expert driving lessons with personalized training at unbeatable value!",
        ],
        typeSpeed: 60,
        backSpeed: 60,
        loop: !1,
      }),
      $(".carousel").owlCarousel({
        margin: 20,
        loop: !0,
        autoplayTimeout: 7e3,
        autoplayHoverPause: !0,
        responsive: { 0: { items: 1 }, 600: { items: 2 }, 1e3: { items: 3 } },
      });
  }),
    AOS.init({ once: !0 });
  let n = () => {
    history.replaceState(
      null,
      document.title,
      window.location.pathname + window.location.search
    );
  };
  window.addEventListener("hashchange", n), window.location.hash && n();
  let l = document.querySelector(".car");
  if (l) {
    let i = 0,
      o = 0;
    function s() {
      (o += (i - o) * 0.1),
        (l.style.transform = `rotate(0deg) translateY(${o}px)`),
        requestAnimationFrame(s);
    }
    window.addEventListener("scroll", () => {
      i = -(0.8 * window.scrollY);
    }),
      s();
  }
  document.getElementById("particles-js") &&
    window.particlesJS &&
    particlesJS("particles-js", {
      particles: {
        number: { value: 40, density: { enable: !0, value_area: 800 } },
        color: { value: "#54a0ff" },
        shape: { type: "circle" },
        opacity: {
          value: 0.6,
          random: !0,
          anim: { enable: !0, speed: 1, opacity_min: 0.2 },
        },
        size: {
          value: 4,
          random: !0,
          anim: { enable: !0, speed: 3, size_min: 1 },
        },
        move: {
          enable: !0,
          speed: 1.5,
          random: !0,
          straight: !1,
          out_mode: "out",
        },
      },
      interactivity: {
        detect_on: "window",
        events: {
          onhover: { enable: !0, mode: "grab" },
          onclick: { enable: !0, mode: "push" },
        },
        modes: {
          grab: { distance: 150, line_linked: { opacity: 0.4 } },
          push: { particles_nb: 4 },
        },
      },
      retina_detect: !0,
    });
});
