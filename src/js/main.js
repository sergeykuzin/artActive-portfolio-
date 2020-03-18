import ReviewsSlider from './modules/ReviewsSlider';
import MainMenuToggleButton from './modules/MainMenuToggleButton';

document.addEventListener('DOMContentLoaded', () => {
  const mainMenuToggleButton = new MainMenuToggleButton(
    document.querySelector('.menu-toggle'),
  );

  const reviewsSlider = new ReviewsSlider('.reviews-slider');
  reviewsSlider.init();
});
