const slides = [... document.querySelectorAll('.sld')];
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

const hideElement = () => {
    const slidesToHide = slides.slice(1);

    slidesToHide.forEach((slides) =>{
        slides.classList.add('hidden')
    });
}
hideElement();

let currentSlidesIndex = 0;

const showNextSlide = () => {
    slides[currentSlidesIndex].classList.add('hidden');

    if(currentSlidesIndex === slides.length - 1){
        slides[0].classList.remove('hidden');
        currentSlidesIndex = 0;
    } else {
        slides[currentSlidesIndex + 1].classList.remove('hidden');
        currentSlidesIndex++;
    }
};
const showPrevSlide = () => {
    slides[currentSlidesIndex].classList.add('hidden');

    if(currentSlidesIndex === 0){
        slides[slides.length - 1].classList.remove('hidden');
        currentSlidesIndex = slides.length - 1;
    } else {
        slides[currentSlidesIndex - 1].classList.remove('hidden');
        currentSlidesIndex--;
    }
    
}
nextBtn.addEventListener('click', showNextSlide);
prevBtn.addEventListener('click', showPrevSlide);