let sliderFactory = {
    createNewSlider: function () {
        let newSlider = {
            imagesUrls: [],
            currentImageIndex: 0,
            showPrevBtn: null,
            showNextBtn: null,
            slideImg: null,

            start: function (elId) {
                let that = this;

                let elSelector = '#' + elId;
                let el = document.querySelector(elSelector);

                this.showPrevBtn = el.querySelector('.show-prev-btn');
                this.showNextBtn = el.querySelector('.show-next-btn');
                this.slideImg = el.querySelector('.slide-img');

                //subscribe to events 
                this.showPrevBtn.addEventListener('click', function (e) {
                    that.onShowprevBtnClick(e);
                });
                this.showNextBtn.addEventListener('click', function (e) {
                    that.onShowNextBtnClick(e);
                });

                //create image array
                this.imagesUrls.push('img/slider/icon1.jpg');
                this.imagesUrls.push('img/slider/icon2.jpg');
                this.imagesUrls.push('img/slider/icon3.jpg');

                this.slideImg.src = this.imagesUrls[this.currentImageIndex];
                this.showPrevBtn.disabled = true;
            },

            onShowprevBtnClick: function (e) {
                this.currentImageIndex--;
                this.slideImg.src = this.imagesUrls[this.currentImageIndex];
                this.showNextBtn.disabled = false;

                if (this.currentImageIndex === 0) {
                    this.showPrevBtn.disabled = true;
                }
            },

            onShowNextBtnClick: function (e) {
                this.currentImageIndex++;
                this.slideImg.src = this.imagesUrls[this.currentImageIndex];
                this.showPrevBtn.disabled = false;

                if (this.currentImageIndex === this.imagesUrls.length - 1) {
                    this.showNextBtn.disabled = true;
                }
            }
        };
        return newSlider; 
    }
}

let slider1 = sliderFactory.createNewSlider();
let slider2 = sliderFactory.createNewSlider();

slider1.start('slider1');
slider2.start('slider2');

//find elements
/*let showPrevBtn = document.getElementById('show-prev-btn');
let showNextBtn = document.getElementById('show-next-btn');
let slideImg = document.getElementById('slide-img');


//subscribe to events 
showPrevBtn.addEventListener('click', onShowprevBtnClick);
showNextBtn.addEventListener('click', onShowNextBtnClick);

//create image array
let imagesUrls = [];
imagesUrls.push('img/slider/icon1.jpg');
imagesUrls.push('img/slider/icon2.jpg');
imagesUrls.push('img/slider/icon3.jpg');

currentImageIndex = 0;
slideImg.src = imagesUrls[currentImageIndex];
showPrevBtn.disabled = true;

//functions difinitions
function onShowprevBtnClick() {
    currentImageIndex--;
    slideImg.src = imagesUrls[currentImageIndex];
    showNextBtn.disabled = false;

    if (currentImageIndex === 0) {
        showPrevBtn.disabled = true;
    }
}
function onShowNextBtnClick() {
    currentImageIndex++;
    slideImg.src = imagesUrls[currentImageIndex];
    showPrevBtn.disabled = false;

    if (currentImageIndex === imagesUrls.length - 1) {
        showNextBtn.disabled = true;
    }
}*/