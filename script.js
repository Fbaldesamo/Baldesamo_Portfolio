document.addEventListener('DOMContentLoaded', () => {
    const imageWrappers = document.querySelectorAll('.image-wrapper');

    imageWrappers.forEach(imageWrapper => {
        const images = imageWrapper.querySelectorAll('img');
        const totalImages = images.length;
        let currentIndex = 0;

        function autoSwipe() {
            currentIndex++;
            if (currentIndex >= totalImages) {
                currentIndex = 0;
            }
            const offset = -currentIndex * 100;
            imageWrapper.style.transform = `translateX(${offset}%)`;
        }

        setInterval(autoSwipe, 3000); // Change image every 3 seconds
    });
});
