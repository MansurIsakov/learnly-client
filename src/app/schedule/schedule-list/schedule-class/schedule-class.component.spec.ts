import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleClassComponent } from './schedule-class.component';

describe('ScheduleClassComponent', () => {
  let component: ScheduleClassComponent;
  let fixture: ComponentFixture<ScheduleClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
