import URL from '@models/URL';
import UrlsRepository from '@repositories/UrlsRepository';

interface CreateUrlDTO {
  address: string;
  description: string;
}

class CreateUrlService {
  constructor(private readonly urlsRepository: UrlsRepository) {
    this.urlsRepository = urlsRepository;
  }

  public execute({ address, description }: CreateUrlDTO): URL {
    const urlFound = this.urlsRepository.findByAddress(address);

    if (urlFound) {
      throw Error('URL already exists.');
    }

    const url = this.urlsRepository.create({ address, description });

    return url;
  }
}

export default CreateUrlService;
