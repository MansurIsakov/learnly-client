import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniWidgetComponent } from './uni-widget.component';

describe('UniWidgetComponent', () => {
  let component: UniWidgetComponent;
  let fixture: ComponentFixture<UniWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
