import intersectionObserverPolyfill from 'intersection-observer/intersection-observer';
import ReviewsSlider from './modules/ReviewsSlider';
import MainMenuToggleButton from './modules/MainMenuToggleButton';
import FeedbackForm from './modules/FeedbackForm';
import lazyLoadingImages from './modules/lazyLoadingImages';
import SiteNavigation from './modules/SiteNavigation';
import hideShowContacts from './modules/hideShowContacts'; 
import YandexMaps from './modules/YandexMaps';

const runJS = () => {
  const mainMenuToggleButton = new MainMenuToggleButton(
    document.querySelector('.menu-toggle'),
  );

  const siteNavigation = new SiteNavigation({
    mainNavigationMenu: document.querySelector('.page-header__menu-wrapper'),
    buttonToOpenMainMenu: document.querySelector('.menu-toggle'),
  });
  siteNavigation.init();

  lazyLoadingImages();

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

  const yandexMaps = new YandexMaps({
    mapWrapper: document.querySelector('.map-wrapper'),
  });
  yandexMaps.init();

  hideShowContacts();
};

document.addEventListener('DOMContentLoaded', runJS);
