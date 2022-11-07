import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreModulesComponent } from './core-modules.component';

describe('CoreModulesComponent', () => {
  let component: CoreModulesComponent;
  let fixture: ComponentFixture<CoreModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreModulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
