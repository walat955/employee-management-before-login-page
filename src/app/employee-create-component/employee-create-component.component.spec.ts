import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCreateComponentComponent } from './employee-create-component.component';

describe('EmployeeCreateComponentComponent', () => {
  let component: EmployeeCreateComponentComponent;
  let fixture: ComponentFixture<EmployeeCreateComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeCreateComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeCreateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
