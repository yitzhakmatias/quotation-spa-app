import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Quotation} from '../../../Model/Quotation';
import {Currency} from '../../../Model/Currency';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.css']
})
export class QuotationComponent implements OnInit {

  quotation: Quotation;
  quotationResponse: any;
  spinner: boolean;

  dataList: Currency[];

  constructor(private  http: HttpClient) {


    this.quotation = Quotation.QuotationInstance();

    this.spinner = true;

    this.dataList = [{id: 1, Name: 'Dollar'}, {id: 2, Name: 'Real'}];
  }

  ngOnInit(): void {

  }

  getQuotation() {
    this.spinner = false;
    const params = new HttpParams()
      .set('currency', this.quotation.currency)
    ;
    this.http.get('http://localhost:5000/api/quotation/current', {params}).subscribe(response => {
      this.spinner = true;
      this.quotationResponse = response;
    }, error => {
      console.log(error);
    });
  }

}
