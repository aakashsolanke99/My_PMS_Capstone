import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpatienthistoryComponent } from './viewpatienthistory.component';

describe('ViewpatienthistoryComponent', () => {
  let component: ViewpatienthistoryComponent;
  let fixture: ComponentFixture<ViewpatienthistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewpatienthistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewpatienthistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
