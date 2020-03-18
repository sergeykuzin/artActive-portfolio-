import ReviewsSlider from './modules/ReviewsSlider';
import MainMenuToggleButton from './modules/MainMenuToggleButton';
import FeedbackForm from './modules/FeedbackForm';

document.addEventListener('DOMContentLoaded', () => {
  const mainMenuToggleButton = new MainMenuToggleButton(
    document.querySelector('.menu-toggle'),
  );

  const reviewsSlider = new ReviewsSlider('.reviews-slider');
  reviewsSlider.init();

  const feedbackForm = new FeedbackForm('#feedback-form');
  feedbackForm.init();
});
