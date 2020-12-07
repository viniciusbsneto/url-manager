import URL from '@models/URL';
import UrlsRepository from '@repositories/UrlsRepository';

interface UpdateUrlDTO {
  address: string;
  description: string;
}

class UpdateUrlService {
  constructor(private readonly urlsRepository: UrlsRepository) {
    this.urlsRepository = urlsRepository;
  }

  public execute(id: string, { address, description }: UpdateUrlDTO): URL {
    const urlFound = this.urlsRepository.findById(id);

    if (!urlFound) {
      throw new Error('URL not found.');
    }

    const updatedUrl = this.urlsRepository.update(id, { address, description });

    return updatedUrl;
  }
}

export default UpdateUrlService;
