document.addEventListener('DOMContentLoaded', function () {
	var sliderTrack = document.querySelector('.slider__track');
	var sliderItems = document.querySelectorAll('.slider__item');
	var nextButton = document.querySelector('.slider__button--next');
	var prevButton = document.querySelector('.slider__button--prev');
	var position = 0; // Стартовая позиция слайдера

	// Функция для переключения слайдов
	function moveTo(position) {
		sliderTrack.style.transform = `translateX(${position}%)`;
	}

	// Обработчики клика для кнопок
	nextButton.addEventListener('click', function () {
		if (position > -(100 * (sliderItems.length - 1))) {
			position -= 100; // Двигаем слайдер на один слайд влево
			moveTo(position);
		} else {
			position = 0; // Если достигнут последний слайд, возвращаемся к первому
			moveTo(position);
		}
	});

	prevButton.addEventListener('click', function () {
		if (position < 0) {
			position += 100; // Двигаем слайдер на один слайд вправо
			moveTo(position);
		} else {
			position = -(100 * (sliderItems.length - 1)); // Если достигнут первый слайд, переходим к последнему
			moveTo(position);
		}
	});

	// Инициализируем начальное положение слайдов
	sliderItems.forEach((item, index) => {
		item.style.left = `${index * 100}%`;
	});
});
