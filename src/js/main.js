import MainMenuToggleButton from './modules/MainMenuToggleButton';

document.addEventListener('DOMContentLoaded', function() {
  const mainMenuToggleButton = new MainMenuToggleButton(
    document.querySelector('.menu-toggle')
  );
});
