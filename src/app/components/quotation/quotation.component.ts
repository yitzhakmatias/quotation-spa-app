import {Component, OnChanges, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Quotation} from '../../../Model/Quotation';
import {Currency} from '../../../Model/Currency';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {QuotationObj} from '../../../Model/QuotationObj';


@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.css']
})
export class QuotationComponent implements OnInit, OnChanges {

  quotationResponse: QuotationObj;
  quotation: Quotation;

  spinner: boolean;

  currency: Currency[];

  quotationForm: FormGroup;
  submitted = false;

  constructor( private formBuilder: FormBuilder, private  http: HttpClient) {


    this.quotation = Quotation.QuotationInstance();
    this.quotationResponse = QuotationObj.QuotationObj();
    this.currency = [{Id: 1, Name: 'Dollar'}, {Id: 2, Name: 'Real'}];
    this.spinner = true;


  }

  ngOnChanges(): void {

  }

  ngOnInit(): void {

    this.quotationForm = this.formBuilder.group({
      currency: ['', Validators.required]
    });
  }

  get f() {
    return this.quotationForm.controls;
  }

  get amount() {
    return this.quotationForm.get('currency');
  }

  getQuotation() {
    this.spinner = false;
    let currency = (this.amount.value);
    const params = new HttpParams()
      .set('currency', currency)
    ;
    this.http.get('http://localhost:5000/api/quotation/currency', {params}).subscribe((response: QuotationObj) => {
      this.spinner = true;
      this.quotationResponse = response;

    }, error => {
      console.log(error);
    });
  }

}
