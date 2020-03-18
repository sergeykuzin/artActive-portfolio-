import Swiper from 'swiper';

class ReviewsSlider {
  constructor(selectorSwiperContainer) {
    this.selectorSwiperContainer = selectorSwiperContainer;
    this.slider = null;
  }

  init() {
    this.slider = new Swiper(this.selectorSwiperContainer, {
      loop: true,
      spaceBetween: 25,
      centeredSlides: true,
      slidesPerView: 'auto',
      roundLengths: true,

      navigation: {
        nextEl: '.review__navigation-button-next',
        prevEl: '.review__navigation-button-prev',
      },
    });
  }
}

export default ReviewsSlider;
