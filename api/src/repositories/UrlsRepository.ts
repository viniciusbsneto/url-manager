import URL from '@models/URL';

interface CreateUrlDTO {
  address: string;
  description: string;
}

interface UpdateUrlDTO {
  address: string;
  description: string;
}

class UrlsRepository {
  private urls: URL[];

  constructor() {
    this.urls = [];
  }

  public create({ address, description }: CreateUrlDTO): URL {
    const url = new URL({ address, description });

    this.urls.push(url);

    return url;
  }

  public all(): URL[] {
    return this.urls;
  }

  public findById(id: string): URL | null {
    const urlFound = this.urls.find(url => url.id === id);

    return urlFound || null;
  }

  public findByAddress(address: string): URL | null {
    const urlFound = this.urls.find(url => url.address === address);

    return urlFound || null;
  }

  public update(id: string, { address, description }: UpdateUrlDTO): URL {
    const urlIndex = this.urls.findIndex(url => url.id === id);

    const url = {
      id,
      address,
      description,
    };

    this.urls[urlIndex] = url;

    return url;
  }

  public delete(id: string): void {
    const index = this.urls.findIndex(url => url.id === id);

    this.urls.splice(index, 1);
  }
}

export default UrlsRepository;
