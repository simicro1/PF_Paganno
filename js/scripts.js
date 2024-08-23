let currentIndex = 0;

function moveSlide(step) {
    const items = document.querySelectorAll('.c-carousel-item');
    const totalItems = items.length;

    currentIndex += step;

    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    const newTransformValue = -currentIndex * 100;
    document.querySelector('.c-carousel-inner').style.transform = `translateX(${newTransformValue}%)`;
}