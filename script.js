const slider = document.getElementById('slider');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const totalSlides = dots.length;
let currentIndex = 0;
let autoSlide;

function goToSlide(index) {
  slider.style.transform = `translateX(-${index * 25}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
  currentIndex = index;
}

function startAutoSlide() {
  autoSlide = setInterval(() => {
    const nextIndex = (currentIndex + 1) % totalSlides;
    goToSlide(nextIndex);
  }, 5000);
}

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    clearInterval(autoSlide);
    goToSlide(Number(dot.dataset.index));
    startAutoSlide();
  });
});

prevBtn.addEventListener('click', () => {
  clearInterval(autoSlide);
  const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  goToSlide(prevIndex);
  startAutoSlide();
});

nextBtn.addEventListener('click', () => {
  clearInterval(autoSlide);
  const nextIndex = (currentIndex + 1) % totalSlides;
  goToSlide(nextIndex);
  startAutoSlide();
});

startAutoSlide();
