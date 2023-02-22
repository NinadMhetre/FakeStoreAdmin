import { TestBed } from '@angular/core/testing';

import { ProductSetupService } from './product-setup.service';

describe('ProductSetupService', () => {
  let service: ProductSetupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductSetupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
