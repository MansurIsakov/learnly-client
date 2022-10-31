import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsWidgetComponent } from './goals-widget.component';

describe('GoalsWidgetComponent', () => {
  let component: GoalsWidgetComponent;
  let fixture: ComponentFixture<GoalsWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalsWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
