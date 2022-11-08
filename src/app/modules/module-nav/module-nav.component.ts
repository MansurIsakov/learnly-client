import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModulesSection } from 'src/app/common/constants/modules.enum';

@Component({
  selector: 'app-module-nav',
  templateUrl: './module-nav.component.html',
  styleUrls: ['./module-nav.component.scss'],
})
export class ModuleNavComponent implements OnInit {
  @Output() change: EventEmitter<any> = new EventEmitter();
  // Anton
  currentModules = ModulesSection.ALLCOURSE;
  userCourse = JSON.parse(localStorage.getItem('userData')).course;
  userLevel = JSON.parse(localStorage.getItem('userData')).level;

  navItems: { name: string; value: ModulesSection }[] = [
    {
      name: `All ${this.userLevel + this.userCourse} Courses`,
      value: ModulesSection.ALLCOURSE,
    },
    {
      name: 'My Modules',
      value: ModulesSection.MYMODULES,
    },
    {
      name: 'Core Modules',
      value: ModulesSection.COREMODULES,
    },
    {
      name: 'All Modules',
      value: ModulesSection.ALLMODULES,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onSelect(value: ModulesSection) {
    this.currentModules = value;
    this.change.emit(value);
  }
}
