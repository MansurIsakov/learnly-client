import { Component, Input, OnInit } from '@angular/core';
import { IClass } from 'src/app/common/types/interfaces';
import { IModule } from 'src/app/models/module.model';

@Component({
  selector: 'app-module-info',
  templateUrl: './module-info.component.html',
  styleUrls: ['./module-info.component.scss'],
})
export class ModuleInfoComponent implements OnInit {
  @Input() modulesNumber;
  @Input() credits;
  @Input() module: IModule;

  constructor() {}

  countClasses(module: IModule, type: string): number {
    return module.classes.filter((cl: IClass) => cl.type === type).length;
  }

  ngOnInit(): void {}
}
