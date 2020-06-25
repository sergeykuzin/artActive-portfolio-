class SiteNavigation {
  constructor(params) {
    this.mainNavigationMenu = params.mainNavigationMenu;
    this.buttonToOpenMainMenu = params.buttonToOpenMainMenu;
  }

  init() {
    this.mainNavigationMenu.addEventListener('click', this.goToSiteSection.bind(this));
  }

  goToSiteSection(event) {
    const clickedElem = event.target;
    const isClickedOnLink = clickedElem.classList.contains('main-nav__link');
    const isNavigationMenuOpen = this.buttonToOpenMainMenu.classList.contains('menu-toggle--open');
    if (isClickedOnLink && isNavigationMenuOpen) {
      this.closeMainNavigationMenu();
      this.removeOverlay();
    }
  }

  closeMainNavigationMenu() {
    this.buttonToOpenMainMenu.classList.remove('menu-toggle--open');
  }

  removeOverlay() {
    document.body.classList.toggle('overlay');
    document.body.classList.toggle('no-scroll');
  }
}

export default SiteNavigation;
