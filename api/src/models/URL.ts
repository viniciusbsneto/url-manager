import { v4 as uuidv4 } from 'uuid';

class URL {
  id: string;

  address: string;

  description: string;

  constructor(address: string, description: string) {
    this.id = uuidv4();
    this.address = address;
    this.description = description;
  }
}

export default URL;
