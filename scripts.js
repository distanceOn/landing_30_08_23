const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currentIndex = 0;

const images = Array.from(carousel.children);

nextButton.addEventListener('click', () => {
	currentIndex = (currentIndex + 1) % images.length;
	updateCarousel();
});

prevButton.addEventListener('click', () => {
	currentIndex = (currentIndex - 1 + images.length) % images.length;
	updateCarousel();
});

function updateCarousel() {
	const offset = -currentIndex * 100;
	carousel.style.transform = `translateX(${offset}%)`;
}

function autoSlide() {
	const nextIndex = (currentIndex + 1) % images.length;
	currentIndex = nextIndex;
	updateCarousel();
}

setInterval(autoSlide, 4000);
