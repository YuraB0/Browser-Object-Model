// Отримуємо елементи для відображення ширини та висоти
const widthValue = document.getElementById('widthValue');
const heightValue = document.getElementById('heightValue');

// Функція, яка оновлює значення ширини і висоти
function updateWindowSize() {
    widthValue.textContent = window.innerWidth;  // Ширина вікна
    heightValue.textContent = window.innerHeight;  // Висота вікна
}

// Спочатку викликаємо функцію, щоб відобразити початкові розміри вікна
updateWindowSize();

// Додаємо обробник події для зміни розміру вікна
window.addEventListener('resize', updateWindowSize);
