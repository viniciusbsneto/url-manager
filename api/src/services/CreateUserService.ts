import User from '@models/User';
import UsersRepository from '@repositories/UsersRepository';

interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  constructor(private readonly usersRepository: UsersRepository) {
    this.usersRepository = usersRepository;
  }

  public execute({ name, email, password }: CreateUserDTO): User {
    const userFound = this.usersRepository.findByEmail(email);

    if (userFound) {
      throw Error('User already exists.');
    }

    const user = this.usersRepository.create({ name, email, password });

    return user;
  }
}

export default CreateUserService;
