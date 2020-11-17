import URL from '../models/URL';

class UrlsRepository {
  private urls: URL[];

  constructor() {
    this.urls = [];
  }
}

export default UrlsRepository;
