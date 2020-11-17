import URL from '../models/URL';

interface CreateUrlDTO {
  address: string;
  description: string;
}

interface UpdateUrlDTO {
  id: string;
  address: string;
  description: string;
}

class UrlsRepository {
  private urls: URL[];

  constructor() {
    this.urls = [];
  }

  public create({ address, description }: CreateUrlDTO): URL | null {
    const urlFound = this.urls.find(url => url.address === address);

    if (urlFound) {
      return null;
    }

    const url = new URL({ address, description });

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

  public update({ id, address, description }: UpdateUrlDTO): URL | null {
    const urlFoundIndex = this.urls.findIndex(url => url.id === id);

    if (urlFoundIndex < 0) {
      return null;
    }

    const url = {
      id,
      address,
      description,
    };

    this.urls[urlFoundIndex] = url;

    return url;
  }

  public delete(id: string): boolean {
    const index = this.urls.findIndex(url => url.id === id);

    if (index < 0) {
      return false;
    }

    this.urls.splice(index, 1);

    return true;
  }
}

export default UrlsRepository;
