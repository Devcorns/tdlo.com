import { TestBed } from '@angular/core/testing';

import { ViewCompanyProfileService } from './view-company-profile.service';

describe('ViewCompanyProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewCompanyProfileService = TestBed.get(ViewCompanyProfileService);
    expect(service).toBeTruthy();
  });
});
