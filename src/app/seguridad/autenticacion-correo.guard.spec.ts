import { TestBed } from '@angular/core/testing';

import { AutenticacionCorreoGuard } from './autenticacion-correo.guard';

describe('AutenticacionCorreoGuard', () => {
  let guard: AutenticacionCorreoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutenticacionCorreoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
