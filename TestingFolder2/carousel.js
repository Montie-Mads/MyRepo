//target the carousel images tag
const carouselImages = document.querySelector('.carousel-images');
//target the carousel buttons
const carouselButtons = document.querySelectorAll('.carousel-btn');
const totalImages =document.querySelectorAll('.carousel-images img').length;

let currentIndex = 0;

//create function to add an event listener to the buttons

carouselButtons.forEach(button => {
    button.addEventListener('click', () => {

        if (button.classList.contains('carousel-btn-next')) {
            currentIndex++;
            console.log("here")
        } else {
            currentIndex--;
        }

        if (currentIndex < 0) {
            currentIndex = totalImages - 1;
        } else if (currentIndex >= totalImages) {
            currentIndex = 0;
        }

        // for ( let i = 0; i < 3; i++)
        carouselImages.style.transform = `translateX(-${currentIndex * 100 / totalImages}%)`;

    });


});
