import { TestBed } from '@angular/core/testing';

import { EditarListaService } from './editar-lista.service';

describe('EditarListaService', () => {
  let service: EditarListaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditarListaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
