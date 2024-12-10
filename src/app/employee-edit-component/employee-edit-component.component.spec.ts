import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeEditComponentComponent } from './employee-edit-component.component';

describe('EmployeeEditComponentComponent', () => {
  let component: EmployeeEditComponentComponent;
  let fixture: ComponentFixture<EmployeeEditComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeEditComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeEditComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
