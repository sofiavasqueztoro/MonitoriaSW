import { TestBed } from '@angular/core/testing';

import { EditorialService } from './editorial.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EditorialService', () => {
  let service: EditorialService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EditorialService],
    });
    service = TestBed.inject(EditorialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});