(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").css("top", "0px");
    } else {
      $(".sticky-top").css("top", "-100px");
    }
  });

  // Dropdown on mouse hover
  const $dropdown = $(".dropdown");
  const $dropdownToggle = $(".dropdown-toggle");
  const $dropdownMenu = $(".dropdown-menu");
  const showClass = "show";

  $(window).on("load resize", function () {
    if (this.matchMedia("(min-width: 992px)").matches) {
      $dropdown.hover(
        function () {
          const $this = $(this);
          $this.addClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "true");
          $this.find($dropdownMenu).addClass(showClass);
        },
        function () {
          const $this = $(this);
          $this.removeClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "false");
          $this.find($dropdownMenu).removeClass(showClass);
        }
      );
    } else {
      $dropdown.off("mouseenter mouseleave");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  document.addEventListener("DOMContentLoaded", function () {
    const advertSection = document.querySelector(".advert-section");
    const fadeLeft = document.querySelector(".fade-left");
    const fadeRight = document.querySelector(".fade-right");
    const video = document.querySelector(".video-container video");

    // Create and style the unmute button
    const unmuteButton = document.createElement("button");
    unmuteButton.innerText = "Unmute";
    unmuteButton.className = "unmute-button hidden";

    // Create and style the mute button
    const muteButton = document.createElement("button");
    muteButton.innerText = "Mute";
    muteButton.className = "mute-button hidden";

    // Append the buttons to the video container
    const videoContainer = document.querySelector(".video-container");
    videoContainer.appendChild(unmuteButton);
    videoContainer.appendChild(muteButton);

    // Add event listeners for the buttons
    unmuteButton.addEventListener("click", function () {
      video.muted = false;
      toggleButtons();
    });

    muteButton.addEventListener("click", function () {
      video.muted = true;
      toggleButtons();
    });

    function toggleButtons() {
      if (video.muted) {
        unmuteButton.classList.add("visible");
        unmuteButton.classList.remove("hidden");
        muteButton.classList.add("hidden");
        muteButton.classList.remove("visible");
      } else {
        unmuteButton.classList.add("hidden");
        unmuteButton.classList.remove("visible");
        muteButton.classList.add("visible");
        muteButton.classList.remove("hidden");
      }
    }

    function checkScroll() {
      const triggerPoint = window.innerHeight / 1.3;

      [fadeLeft, fadeRight].forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < triggerPoint) {
          element.classList.add("scrolled");
          if (element === fadeLeft && video.paused) {
            video.play();
          }
        } else {
          element.classList.remove("scrolled");
          if (element === fadeLeft) {
            video.pause();
          }
        }
      });

      toggleButtons();
    }

    window.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    // Initial check in case the section is already in view when the page loads
    checkScroll();
  });

  // Date and time picker
  $(".date").datetimepicker({
    format: "L",
  });
  $(".time").datetimepicker({
    format: "LT",
  });
  document.addEventListener("DOMContentLoaded", function () {
    const advertSection = document.querySelector(".advert-section");

    window.addEventListener("scroll", function () {
      const sectionTop = advertSection.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight / 1.3;

      if (sectionTop < triggerPoint) {
        advertSection.classList.add("scrolled");
      } else {
        advertSection.classList.remove("scrolled");
      }
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const advertSection = document.querySelector(".advert-section");

    window.addEventListener("scroll", function () {
      const sectionTop = advertSection.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight / 1.3;

      if (sectionTop < triggerPoint) {
        advertSection.classList.add("scrolled");
      } else {
        advertSection.classList.remove("scrolled");
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const advertSection = document.querySelector(".advert-section");
    const fadeLeft = document.querySelector(".fade-left");
    const fadeRight = document.querySelector(".fade-right");
    const video = document.querySelector(".video-container video");

    function checkScroll() {
      const triggerPoint = window.innerHeight / 1.3;

      [fadeLeft, fadeRight].forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < triggerPoint) {
          element.classList.add("scrolled");
          if (element === fadeLeft && video.paused) {
            video.play();
          }
        } else {
          element.classList.remove("scrolled");
          if (element === fadeLeft) {
            video.pause();
          }
        }
      });
    }

    window.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    // Initial check in case the section is already in view when the page loads
    checkScroll();
  });

  // Footer map
})(jQuery);
