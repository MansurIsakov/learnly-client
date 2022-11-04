import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleNavComponent } from './module-nav.component';

describe('ModuleNavComponent', () => {
  let component: ModuleNavComponent;
  let fixture: ComponentFixture<ModuleNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
