const prev_button = document.querySelector('.prev_button')
const next_button = document.querySelector('.next_button')
const slides = document.querySelectorAll('.reviews_list_item')

let currentSlideIndex = 0

function showSlide() {
    slides[currentSlideIndex].classList.add('block')
}

function hideSlide() {
    slides[currentSlideIndex].classList.remove('block')
}

function nextSlide() {
    hideSlide()
    currentSlideIndex ++
    if(currentSlideIndex > slides.length - 1) {
        currentSlideIndex = 0
    }
    showSlide()
}

function previousSlide() {
    hideSlide()
    currentSlideIndex --
    if(currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1
    }
    showSlide()
}

prev_button.addEventListener('click', previousSlide)
next_button.addEventListener('click', nextSlide)