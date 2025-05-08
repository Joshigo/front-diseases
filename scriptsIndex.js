// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.star');

    stars.forEach(star => {
        star.addEventListener('mouseover', function () {
            fillStars(this.dataset.value);
        });

        star.addEventListener('click', function () {
            setRating(this.dataset.value);
        });

        star.addEventListener('mouseout', function () {
            resetStars();
        });
    });

    function fillStars(rating) {
        stars.forEach(star => {
            if (star.dataset.value <= rating) {
                star.classList.add('filled');
            } else {
                star.classList.remove('filled');
            }
        });
    }

    function setRating(rating) {
        stars.forEach(star => {
            if (star.dataset.value <= rating) {
                star.classList.add('filled');
            } else {
                star.classList.remove('filled');
            }
        });
    }

    function resetStars() {
        stars.forEach(star => {
            star.classList.remove('filled');
        });
    }
});
