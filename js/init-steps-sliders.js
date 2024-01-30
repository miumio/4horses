const config = {
	pagination: {
		el: ".swiper-pagination",
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	a11y: {
		nextSlideMessage: "Следующий слайд",
		prevSlideMessage: "Предыдущий слайд",
	},
};

const breakpoint = window.matchMedia("(max-width: 767px");
const slider = document.querySelector([".slider-steps"]);

function createButton(className) {
	const button = document.createElement("button");
	button.type = "button";
	button.className = className;
	return button;
}

const appendSwiperControls = () => {
	const controlsWrapper = document.createElement("div");
	const pagination = document.createElement("div");
	controlsWrapper.className = "swiper-controls";
	pagination.className = "swiper-pagination";

	const buttonNext = createButton("swiper-button-next");
	const buttonPrev = createButton("swiper-button-prev");
	slider.appendChild(controlsWrapper);
	controlsWrapper.appendChild(buttonPrev);
	controlsWrapper.appendChild(pagination);
	controlsWrapper.appendChild(buttonNext);
};

const initSwiper = () => {
	appendSwiperControls();

	const swiper = new Swiper(".slider-steps", {
		wrapperClass: "slider-steps__inner",
		...config,
	});
};

if (breakpoint.matches && slider) {
	initSwiper();
}
