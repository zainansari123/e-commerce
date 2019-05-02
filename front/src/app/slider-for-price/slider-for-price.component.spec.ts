import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderForPriceComponent } from './slider-for-price.component';

describe('SliderForPriceComponent', () => {
  let component: SliderForPriceComponent;
  let fixture: ComponentFixture<SliderForPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderForPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderForPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
