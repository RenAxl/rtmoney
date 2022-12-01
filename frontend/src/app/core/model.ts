export class Person {
    id?: number;
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
