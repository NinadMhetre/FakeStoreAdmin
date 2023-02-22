import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMasterDetailsComponent } from './product-master-details.component';

describe('ProductMasterDetailsComponent', () => {
  let component: ProductMasterDetailsComponent;
  let fixture: ComponentFixture<ProductMasterDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductMasterDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductMasterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
