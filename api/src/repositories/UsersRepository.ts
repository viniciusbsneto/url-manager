import User from '../models/User';

interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
}

interface UpdateUserDTO {
  name: string;
  email: string;
}

class UsersRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  public create({ name, email, password }: CreateUserDTO): User {
    const user = new User({ name, email, password });

    this.users.push(user);

    return user;
  }

  public all(): User[] {
    return this.users;
  }

  public findById(id: string): User | null {
    const userFound = this.users.find(user => user.id === id);

    return userFound || null;
  }

  public findByEmail(email: string): User | null {
    const userFound = this.users.find(user => user.email === email);

    return userFound || null;
  }

  public update(id: string, { name, email }: UpdateUserDTO): User {
    const userIndex = this.users.findIndex(user => user.id === id);

    const user = {
      ...this.users[userIndex],
      name,
      email,
    };

    this.users[userIndex] = user;

    return user;
  }

  public delete(id: string): void {
    const index = this.users.findIndex(user => user.id === id);

    this.users.splice(index, 1);
  }
}

export default UsersRepository;
