import {Injectable} from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class QuotationService {
  baseUrl = 'http://localhost:5000/api/quotation/current';

  constructor() {
  }

  getQuotation(currency): any {

    console.log(currency);
    axios.get(this.baseUrl, {
      params: {
        currency: currency
      }
    }).then((response) => {
      console.log(response);
      return response.data;
    }).catch((error) => {
      console.log(error);
    });
  }
}
