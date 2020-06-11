export class Quotation {

  public currency: string;

  public buyPrice: string;
  public sellPrice: string;
  public date: string;


  constructor(moneda, compra, venta, fecha) {

    this.currency = moneda;
    this.buyPrice = compra;
    this.sellPrice = venta;
    this.date = fecha;

  }

  public static QuotationInstance(): Quotation {
    return new Quotation(1, '', '', '');
  }
}
