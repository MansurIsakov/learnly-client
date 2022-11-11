import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleEditItemComponent } from './schedule-edit-item.component';

describe('ScheduleEditItemComponent', () => {
  let component: ScheduleEditItemComponent;
  let fixture: ComponentFixture<ScheduleEditItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleEditItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleEditItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
