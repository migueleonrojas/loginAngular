import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RememberUserComponent } from './remember-user.component';

describe('RememberUserComponent', () => {
  let component: RememberUserComponent;
  let fixture: ComponentFixture<RememberUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RememberUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RememberUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
