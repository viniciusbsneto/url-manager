import UsersRepository from '../repositories/UsersRepository';

class DeleteUserService {
  constructor(private readonly usersRepository: UsersRepository) {
    this.usersRepository = usersRepository;
  }

  public execute(id: string): void {
    const user = this.usersRepository.findById(id);

    if (!user) {
      throw Error('User not found.');
    }

    this.usersRepository.delete(id);
  }
}

export default DeleteUserService;
