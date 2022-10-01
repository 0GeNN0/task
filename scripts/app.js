const headerEl = document.querySelector('.header');
const homeEl = document.querySelector('#home');
const fadeElements = document.querySelectorAll('.fade');
const fadeWithTranslateElements = document.querySelectorAll('.fade-w-trans');
const slider = document.querySelector('.slider');
const testmonial = document.querySelectorAll('.testmonial');
const leftArrow = document.querySelector('.left-btn');
const rightArrow = document.querySelector('.right-btn');
const dots = document.querySelector('.dots');

window.addEventListener('scroll', () => {
  // Header background
  const homePosition = homeEl.getBoundingClientRect().bottom;

  if (homePosition <= 200) {
    if (!headerEl.classList.contains('bg-white')) {
      headerEl.classList.add('bg-white');
    }
  } else {
    headerEl.classList.remove('bg-white');
  }

  // Fade In animation 
  fadeElements.forEach((el, i) => {
    const secPosition = el.getBoundingClientRect().top;

    if (secPosition <= 300) {
      if (!el.classList.contains('animate')) {
        el.classList.add('animate');
      }
    } else {
      el.classList.remove('animate');
    }

    // for last section
    if (i === fadeElements.length - 1) {
      if (secPosition <= 800) {
        if (!el.classList.contains('animate')) {
          el.classList.add('animate');
        }
      }
    }
  });

  // Moving and Fade animation
  fadeWithTranslateElements.forEach(el => {
    const elPosition = el.getBoundingClientRect().top;

    if (elPosition <= 300) {
      if (!el.classList.contains('moving-animate')) {
        el.classList.add('moving-animate');
      }
    } else {
      el.classList.remove('moving-animate');
    }
  });
});


// Carousel
testmonial.forEach(el => {
  const span = document.createElement('span');
  dots.appendChild(span);
});

rightArrow.addEventListener('click', () => {
  if (slider.style.translate < 0) return;

  slider.style.translate = `-${testmonial[0].clientWidth}px`;
});

leftArrow.addEventListener('click', () => {
  if (slider.style.translate === 0) return;

  slider.style.translate = 0;
});