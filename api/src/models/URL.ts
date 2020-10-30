import { uuid } from 'uuidv4';

class URL {
  id: string;

  address: string;

  description: string;

  constructor(address: string, description: string) {
    this.id = uuid();
    this.address = address;
    this.description = description;
  }
}

export default URL;
