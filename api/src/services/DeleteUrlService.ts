import UrlsRepository from '../repositories/UrlsRepository';

class DeleteUrlService {
  constructor(private readonly urlsRepository: UrlsRepository) {
    this.urlsRepository = urlsRepository;
  }

  public execute(id: string): void {
    const url = this.urlsRepository.findById(id);

    if (!url) {
      throw Error('URL not found.');
    }

    this.urlsRepository.delete(id);
  }
}

export default DeleteUrlService;
