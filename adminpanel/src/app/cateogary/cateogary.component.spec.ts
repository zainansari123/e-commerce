import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CateogaryComponent } from './cateogary.component';

describe('CateogaryComponent', () => {
  let component: CateogaryComponent;
  let fixture: ComponentFixture<CateogaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CateogaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CateogaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
