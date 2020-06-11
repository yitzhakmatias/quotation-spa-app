import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Purchase} from '../../../Model/Purchase';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PurchaseService} from '../../services/purchase.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  purchaseForm: FormGroup;
  submitted = false;
  purchaseData: Purchase;

  users: any;


  constructor(private formBuilder: FormBuilder, private  http: HttpClient, private purchaseSrv: PurchaseService) {

    this.getUserList();

  }

  ngOnInit(): void {
    this.purchaseForm = this.formBuilder.group({
      userId: ['', Validators.required],
      amount: ['', Validators.required],
      currency: ['', Validators.required],

    });
  }

  get f() {
    return this.purchaseForm.controls;
  }

  get amount() {
    return this.purchaseForm.get('amount');
  }

  get userId() {
    return this.purchaseForm.get('userId');
  }

  get currency() {
    return this.purchaseForm.get('currency');
  }

  getUserList() {
    this.http.get('http://localhost:5000/api/user/').subscribe(response => {
      this.users = response;
      this.purchaseData = Purchase.PurchaseInstance([{id: 1, Name: 'Dollar'}, {id: 2, Name: 'Real'}], 0, this.users);

    }, error => {
      console.log(error);
    });
  }

  PurchaseCurrency(): void {

    this.submitted = true;

    if (this.purchaseForm.invalid) {
      return;
    }

    const body = new HttpParams()
      .set('amount', this.amount.value)
      .set('currency', this.currency.value)
      .set('userId', this.userId.value);
    const purchase = {
      Amount: parseFloat(this.amount.value),
      Currency: parseInt(this.currency.value),
      UserId: parseInt(this.userId.value)
    };

    this.purchaseSrv.purchaseCurrency(purchase).subscribe(response => {
      let resp = response;
    }, error => {
      console.log(error);
    });


  }
}
