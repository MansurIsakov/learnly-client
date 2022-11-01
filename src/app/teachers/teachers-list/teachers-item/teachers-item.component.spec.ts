import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersItemComponent } from './teachers-item.component';

describe('TeachersItemComponent', () => {
  let component: TeachersItemComponent;
  let fixture: ComponentFixture<TeachersItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachersItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachersItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
