import {Component, Input, OnInit} from '@angular/core';
import {PurchaseService} from '../../services/purchase.service';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.css']
})
export class PurchaseListComponent implements OnInit {

  @Input()
  purchaseList: any;

  constructor(private purchaseSrv: PurchaseService) {


  }

  ngOnInit(): void {

  }

}
