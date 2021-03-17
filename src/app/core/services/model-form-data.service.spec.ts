import { TestBed } from '@angular/core/testing';

import { ModelFormDataService } from './model-form-data.service';

describe('ModelFormDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModelFormDataService = TestBed.get(ModelFormDataService);
    expect(service).toBeTruthy();
  });
});
