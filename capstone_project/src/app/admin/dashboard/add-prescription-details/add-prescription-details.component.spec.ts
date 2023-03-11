import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPrescriptionDetailsComponent } from './add-prescription-details.component';

describe('AddPrescriptionDetailsComponent', () => {
  let component: AddPrescriptionDetailsComponent;
  let fixture: ComponentFixture<AddPrescriptionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPrescriptionDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPrescriptionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
