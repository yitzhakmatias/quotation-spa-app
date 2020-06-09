export class Quotation {

  public moneda: string;
  public compra: string;
  public venta: string;
  public fecha: string;


  constructor(moneda, compra, venta, fecha) {

    this.moneda = moneda;
    this.compra = compra;
    this.venta = venta;
    this.fecha = fecha;

  }

  public static QuotationInstance(): Quotation {
    return new Quotation(1, '', '', '');
  }
}
