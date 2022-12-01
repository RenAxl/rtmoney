export class Address {
  publicPlace?: string;
  number?: string;
  complement?: string;
  district?: string;
  zipCode?: string;
  city?: string;
  state?: string;
}

export class Person {
    id?: number;
    name?: string;
    address = new Address();
    active = true;

  }
  
  export class Category {
    id?: number;
  }

  export class Release {
    id?: number;
    description?: string;
    dueDate?: Date;
    datePayment?: Date;
    value?: number;
    observation?: string;
    type = 'RECEITA';
    person = new Person();
    category = new Category();
  }
