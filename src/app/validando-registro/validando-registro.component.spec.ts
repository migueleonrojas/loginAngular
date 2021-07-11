import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidandoRegistroComponent } from './validando-registro.component';

describe('ValidandoRegistroComponent', () => {
  let component: ValidandoRegistroComponent;
  let fixture: ComponentFixture<ValidandoRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidandoRegistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidandoRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
