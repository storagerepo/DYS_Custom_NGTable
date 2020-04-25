import { TestBed } from '@angular/core/testing';

import { NgCustomTableService } from './ng-custom-table.service';

describe('NgCustomTableService', () => {
  let service: NgCustomTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgCustomTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
