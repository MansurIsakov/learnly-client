import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksSearchBarComponent } from './tasks-search-bar.component';

describe('TasksSearchBarComponent', () => {
  let component: TasksSearchBarComponent;
  let fixture: ComponentFixture<TasksSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksSearchBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
