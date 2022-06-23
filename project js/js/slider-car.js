function Slider() {
    this.currentImageIndex = 0;
    this.imagesUrls = [];
    this.showPrevBtn = null;
    this.showNextBtn = null;
    this.slideImg = null;

    this.start = function (elId) {
        let that = this;

        let elSelector = '#' + elId;
        let el = document.querySelector(elSelector);

        this.showPrevBtn = el.querySelector('.show-prev-btn');
        this.showNextBtn = el.querySelector('.show-next-btn');
        this.slideImg = el.querySelector('.slide-img');

        this.showPrevBtn.addEventListener('click', function (e) {
            that.onShowPrevBtnClick(e);
        });
        this.showNextBtn.addEventListener('click', function (e) {
            that.onShowNextBtnClick(e);
        });

        this.imagesUrls.push('img/slider/car/car1.jpg');
        this.imagesUrls.push('img/slider/car/car2.jpg');
        this.imagesUrls.push('img/slider/car/car3.jpg');
        this.imagesUrls.push('img/slider/car/car4.jpg');
        this.imagesUrls.push('img/slider/car/car5.jpg');

        this.slideImg.src = this.imagesUrls[this.currentImageIndex];
        this.showPrevBtn.disabled = true;
    };
    this.onShowPrevBtnClick = function (e) {
        this.currentImageIndex--;
        this.slideImg.src = this.imagesUrls[this.currentImageIndex];
        this.showNextBtn.disabled = false;
        if (this.currentImageIndex == 0) {
            this.showPrevBtn.disabled = true;
        }

    };
    this.onShowNextBtnClick = function (e) {
        this.currentImageIndex++;
        this.slideImg.src = this.imagesUrls[this.currentImageIndex];
        this.showPrevBtn.disabled = false;
        if (this.currentImageIndex == this.imagesUrls.length - 1) {
            this.showNextBtn.disabled = true;
        }
    };
}
let slider = new Slider();
slider.start('slider-car')


/*let showPrevBtn = document.querySelector('.show-prev-btn');
let showNextBtn = document.querySelector('.show-next-btn');
let slideImg = document.querySelector('.slide-img');
let currentImageIndex = 0;
let imagesUrls = [];

showPrevBtn.addEventListener('click', onShowPrevBtnClick);
showNextBtn.addEventListener('click', onShowNextBtnClick);

imagesUrls.push('img/slider/car/car1.jpg');
imagesUrls.push('img/slider/car/car2.jpg');
imagesUrls.push('img/slider/car/car3.jpg');
imagesUrls.push('img/slider/car/car4.jpg');
imagesUrls.push('img/slider/car/car5.jpg');

slideImg.src = imagesUrls[currentImageIndex];
showPrevBtn.disabled = true;

function onShowPrevBtnClick() {
    currentImageIndex--;
    slideImg.src = imagesUrls[currentImageIndex];
    showNextBtn.disabled = false;
    if (currentImageIndex == 0) {
        showPrevBtn.disabled = true;
    }

}
function onShowNextBtnClick() {
    currentImageIndex++;
    slideImg.src = imagesUrls[currentImageIndex];
    showPrevBtn.disabled = false;
    if (currentImageIndex == imagesUrls.length - 1) {
        showNextBtn.disabled = true;
    }
}*/