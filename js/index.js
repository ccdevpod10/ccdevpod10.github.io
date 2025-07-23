/*mobile menu trigger*/
// document.addEventListener("DOMContentLoaded", function () {
//   const mobileTrigger = document.getElementById("mobile__trigger");
//   const mobileMenu = document.getElementById("mobile__menu");
//   let isActive = false;

//   mobileTrigger.addEventListener("click", () => {
//     isActive = !isActive;
//     if (isActive) {
//       mobileMenu.style.transform = "translateX(0)";
//     }
//   });
// });
//swiper js
document.addEventListener("DOMContentLoaded", function () {
  const thumbSlider = new Swiper(".thumb-slider", {
    spaceBetween: 10,
    loop: true,
    slidesPerView: 5,
    watchSlidesProgress: true,
    freeMode: true,
  });
  const mainSlider = new Swiper(".main-slider", {
    spaceBetween: 10,
    autoplay: {
      delay: 3000, // 3 seconds
      disableOnInteraction: false, // keeps autoplay running after user interaction
      pauseOnMouseEnter: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: thumbSlider,
    },
  });
});
//Timer
document.addEventListener("DOMContentLoaded", function () {
  let countdownDuration = 10 * 60 * 1000; // 10 minutes in milliseconds
  let endTime = new Date().getTime() + countdownDuration;

  function updateTimer() {
    const now = new Date().getTime();
    let remaining = endTime - now;

    if (remaining <= 0) {
      // Reset timer
      endTime = new Date().getTime() + countdownDuration;
      remaining = countdownDuration;
    }

    const minutes = Math.floor((remaining / (1000 * 60)) % 60);
    const seconds = Math.floor((remaining / 1000) % 60);

    document.getElementById("minutes").textContent = String(minutes).padStart(
      2,
      "0"
    );
    document.getElementById("seconds").textContent = String(seconds).padStart(
      2,
      "0"
    );
  }

  updateTimer(); // Initial call
  setInterval(updateTimer, 1000); // Run every second
});
document.addEventListener("DOMContentLoaded", function () {
  const accordionGroups = document.querySelectorAll(".faq-box");

  accordionGroups.forEach((group, groupIndex) => {
    const accordions = group.querySelectorAll(".accordion");

    accordions.forEach((button, index) => {
      const panel = button.nextElementSibling;
      const icon = button.querySelector(".icon");

      // Choose icon colors based on group index
      const isWhiteBg = groupIndex === 1; // 2nd group has white background
      const plusIcon = isWhiteBg
        ? "../images/black_plus.png"
        : "../images/plus.svg";
      const minusIcon = isWhiteBg
        ? "../images/black_minus.png"
        : "../images/minus.svg";

      // Auto-open first in 3rd group
      if (groupIndex === 2 && index === 0) {
        button.classList.add("active");
        panel.style.maxHeight = panel.scrollHeight + "px";
        if (icon) icon.style.backgroundImage = `url('${minusIcon}')`;
      }

      // Toggle click
      button.addEventListener("click", () => {
        const isActive = button.classList.contains("active");

        button.classList.toggle("active");

        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }

        if (icon) {
          icon.style.backgroundImage = isActive
            ? `url('${plusIcon}')`
            : `url('${minusIcon}')`;
        }
      });
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".video-slider", {
    slidesPerView: 1.2, // shows 1 full + 20% next
    spaceBetween: 10,
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // Desktop view
      768: {
        slidesPerView: 5,
      },
    },
  });
});
