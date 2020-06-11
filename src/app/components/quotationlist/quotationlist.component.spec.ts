import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationlistComponent } from './quotationlist.component';

describe('QuotationlistComponent', () => {
  let component: QuotationlistComponent;
  let fixture: ComponentFixture<QuotationlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotationlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
