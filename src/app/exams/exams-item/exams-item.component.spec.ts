import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamsItemComponent } from './exams-item.component';

describe('ExamsItemComponent', () => {
  let component: ExamsItemComponent;
  let fixture: ComponentFixture<ExamsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
