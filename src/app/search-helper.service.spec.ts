import { TestBed } from '@angular/core/testing';

import { SearchHelperService } from './search-helper.service';

describe('SearchHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchHelperService = TestBed.get(SearchHelperService);
    expect(service).toBeTruthy();
  });
});
