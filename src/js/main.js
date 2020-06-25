import intersectionObserverPolyfill from 'intersection-observer/intersection-observer';
import ReviewsSlider from './modules/ReviewsSlider';
import MainMenuToggleButton from './modules/MainMenuToggleButton';
import FeedbackForm from './modules/FeedbackForm';
import lazyLoad from './modules/lazyLoad';

const runJS = () => {
  const mainMenuToggleButton = new MainMenuToggleButton(
    document.querySelector('.menu-toggle'),
  );

  lazyLoad();

  const reviewsSlider = new ReviewsSlider('.reviews-slider');
  reviewsSlider.init();

  const feedbackForm = new FeedbackForm({
    formOpeningElements: '.open-feedback-form-js',
    feedbackFormWrapper: '.feedback-form',
    closeButton: '.feedback-form__close-button',
    sendButton: '.feedback-form__send-button',
    nameField: '.feedback-form__name',
    phoneField: '.feedback-form__phone',
  });
  feedbackForm.init();
};

document.addEventListener('DOMContentLoaded', runJS);
