import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayItemComponent } from './today-item.component';

describe('TodayItemComponent', () => {
  let component: TodayItemComponent;
  let fixture: ComponentFixture<TodayItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
