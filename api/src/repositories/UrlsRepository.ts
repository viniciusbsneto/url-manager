import URL from '../models/URL';

class UrlsRepository {
  private urls: URL[];

  constructor() {
    this.urls = [];
  }

  public create(address: string, description: string): URL | null {
    const urlFound = this.urls.find(url => url.address === address);

    if (urlFound) {
      return null;
    }

    const url = new URL(address, description);

    this.urls.push(url);

    return url;
  }

  public all(): URL[] {
    return this.urls;
  }

  public findById(id: string): URL | null {
    const urlFound = this.urls.find(url => url.id === id);

    if (!urlFound) {
      return null;
    }

    return urlFound;
  }
}

export default UrlsRepository;
