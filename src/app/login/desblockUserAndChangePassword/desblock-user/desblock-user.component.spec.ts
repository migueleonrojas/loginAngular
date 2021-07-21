import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesblockUserComponent } from './desblock-user.component';

describe('DesblockUserComponent', () => {
  let component: DesblockUserComponent;
  let fixture: ComponentFixture<DesblockUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesblockUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesblockUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
