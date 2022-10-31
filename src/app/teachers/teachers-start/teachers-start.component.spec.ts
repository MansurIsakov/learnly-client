import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersStartComponent } from './teachers-start.component';

describe('TeachersStartComponent', () => {
  let component: TeachersStartComponent;
  let fixture: ComponentFixture<TeachersStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachersStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachersStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
