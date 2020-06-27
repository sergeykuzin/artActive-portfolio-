class YandexMaps {
  constructor(params) {
    this.mapWrapper = params.mapWrapper;
  }

  init() {
    this.addEventListener();
  }

  addEventListener() {
    this.mapWrapper.addEventListener('click', this.onClickedToMap.bind(this));
  }

  onClickedToMap() {
    this.toggleMapLoadIndicator();
    this.downloadYandexMaps();
  }

  toggleMapLoadIndicator() {
    this.mapWrapper.classList.toggle('loader');
  }

  downloadYandexMaps() {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('allowfullscreen', 'true');
    iframe.addEventListener('load', this.runAfterLoadingMap.bind(this));
    iframe.setAttribute('src', 'https://yandex.ru/map-widget/v1/-/CKq7ZNjQ');
    this.mapWrapper.appendChild(iframe);
  }

  runAfterLoadingMap() {
    this.toggleMapLoadIndicator();
    this.mapWrapper.removeEventListener('click', this.onClickedToMap);
    this.mapWrapper.removeEventListener('load', this.runAfterLoadingMap);
  }
}

export default YandexMaps;
