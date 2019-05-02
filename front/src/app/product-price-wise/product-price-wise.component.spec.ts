import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPriceWiseComponent } from './product-price-wise.component';

describe('ProductPriceWiseComponent', () => {
  let component: ProductPriceWiseComponent;
  let fixture: ComponentFixture<ProductPriceWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPriceWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPriceWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
