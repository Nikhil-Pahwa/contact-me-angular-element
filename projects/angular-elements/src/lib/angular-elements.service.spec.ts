import { TestBed } from '@angular/core/testing';

import { AngularElementsService } from './angular-elements.service';

describe('AngularElementsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularElementsService = TestBed.get(AngularElementsService);
    expect(service).toBeTruthy();
  });
});
