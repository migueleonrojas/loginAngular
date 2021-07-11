import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesoRegistroComponent } from './proceso-registro.component';

describe('ProcesoRegistroComponent', () => {
  let component: ProcesoRegistroComponent;
  let fixture: ComponentFixture<ProcesoRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcesoRegistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesoRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
