import {Component, Input, OnInit} from '@angular/core';
import {Quotation} from '../../../Model/Quotation';
import {QuotationObj} from '../../../Model/QuotationObj';

@Component({
  selector: 'app-quotationlist',
  templateUrl: './quotationlist.component.html',
  styleUrls: ['./quotationlist.component.css']
})
export class QuotationlistComponent implements OnInit {

  @Input()
  quotation: QuotationObj;

  constructor() {
  }

  ngOnInit(): void {
  }

}
