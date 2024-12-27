const photos = [
    'img/Group 92.png',
    'img/Group 92.png',
    'img/Group 92.png',
    'img/Group 93.png'
];

let currentIndex = 0;
const photoElement = document.getElementById('photo');

photoElement.addEventListener('click', () => {
    photoElement.classList.add('hidden'); // Скрываем текущее изображение

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % photos.length; // Увеличиваем индекс
        photoElement.src = photos[currentIndex]; // Меняем источник изображения
        photoElement.classList.remove('hidden'); // Показать новое изображение
    }, 3000); // Задержка для завершения анимации
});