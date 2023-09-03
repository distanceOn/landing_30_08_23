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

document.addEventListener('DOMContentLoaded', function () {
	const accordionItems = document.querySelectorAll('.accordion-item');

	accordionItems.forEach((item) => {
		const header = item.querySelector('.accordion-header');
		const content = item.querySelector('.accordion-content');
		const exitButton = item.querySelector('.exit');

		header.addEventListener('click', () => {
			if (content.style.display === 'flex') {
				content.style.display = 'none';
				exitButton.classList.remove('exit__active');
			} else {
				content.style.display = 'flex';
				exitButton.classList.add('exit__active');
			}
		});
	});
});
