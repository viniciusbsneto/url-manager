import User from '@models/User';
import UsersRepository from '@repositories/UsersRepository';

interface UpdateUserDTO {
  name: string;
  email: string;
}

class UpdateUserService {
  constructor(private readonly usersRepository: UsersRepository) {
    this.usersRepository = usersRepository;
  }

  public execute(id: string, { name, email }: UpdateUserDTO): User {
    const userFound = this.usersRepository.findById(id);

    if (!userFound) {
      throw new Error('User not found.');
    }

    const updatedUser = this.usersRepository.update(id, {
      name,
      email,
    });

    return updatedUser;
  }
}

export default UpdateUserService;
