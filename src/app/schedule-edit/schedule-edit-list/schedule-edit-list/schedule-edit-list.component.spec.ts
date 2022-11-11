import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleEditListComponent } from './schedule-edit-list.component';

describe('ScheduleEditListComponent', () => {
  let component: ScheduleEditListComponent;
  let fixture: ComponentFixture<ScheduleEditListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleEditListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleEditListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
