import {Currency} from './Currency';
import {User} from './User';

export class Purchase {

  public currency: Currency[];
  public amount: string;
  public users: User[];


  constructor(currency, amount, users) {

    this.currency = currency;
    this.amount = amount;
    this.users = users;


  }

  public static PurchaseInstance(currency,amount,users): Purchase {
    return new Purchase(currency,amount, users);
  }
}
