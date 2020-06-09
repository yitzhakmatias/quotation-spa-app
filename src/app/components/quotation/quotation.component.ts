import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Quotation} from '../../../Model/Quotation';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.css']
})
export class QuotationComponent implements OnInit {
  users: any;
  quotation: Quotation;
  quotationResponse: any;
  spinner:boolean;

  constructor(private  http: HttpClient) {
    this.quotation = Quotation.QuotationInstance();
    this.spinner=true;
  }

  getValues() {

    this.http.get('http://localhost:5000/api/user/').subscribe(response => {
      this.users = response;

    }, error => {
      console.log(error);
    });
  }

  ngOnInit(): void {
    this.getValues();
  }

  getQuotation() {
    this.spinner=false;
    const params = new HttpParams()
      .set('currency', this.quotation.moneda)
    ;
    this.http.get('http://localhost:5000/api/quotation/current', {params}).subscribe(response => {
      this.spinner=true;
      this.quotationResponse = response;

    }, error => {
      console.log(error);
    });
  }
}
