import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  baseUrl = 'http://localhost:5000/api/purchase';

  constructor() {

  }

  purchaseCurrency(model): any {

    return axios.post(this.baseUrl + '/register', model).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  }
  getPurchases():any{
    return axios.get(this.baseUrl ).then((response) => {
      return response.data;
    }).catch((error) => {
      console.log(error);
    });
  }
}
