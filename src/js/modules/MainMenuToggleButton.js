class MainMenuToggleButton {
  constructor(domReference) {
    this.domReference = domReference;
    this.addEventListener();
  }

  addEventListener() {
    this.domReference.addEventListener('click', this.onClick);
  }

  onClick() {
    this.classList.toggle('menu-toggle--open');
    document.body.classList.toggle('overlay');
    document.body.classList.toggle('no-scroll');
  }
}

export default MainMenuToggleButton;
