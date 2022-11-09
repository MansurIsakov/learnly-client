import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IModule } from 'src/app/models/module.model';
import { ModulesService } from '../../modules.service';

@Component({
  selector: 'app-module-item',
  templateUrl: './module-item.component.html',
  styleUrls: ['./module-item.component.scss'],
})
export class ModuleItemComponent implements OnInit {
  @Input() module: IModule;
  @Input() canBeChanged;
  @Output() addModule: EventEmitter<any> = new EventEmitter();
  @Output() remModule: EventEmitter<any> = new EventEmitter();

  hexString = '0123456789abcdef';

  constructor(private modulesService: ModulesService) {}

  ngOnInit(): void {}

  randomColor = () => {
    let hexCode = '#';
    for (let i = 0; i < 6; i++) {
      hexCode +=
        this.hexString[Math.floor(Math.random() * this.hexString.length)];
    }
    return hexCode;
  };

  generateGrad = () => {
    let colorOne = this.randomColor();
    let colorTwo = this.randomColor();
    let angle = Math.floor(Math.random() * 360);

    return `linear-gradient(${angle}deg, ${colorOne}, ${colorTwo})`;
  };

  takeModule(moduleId: string) {
    this.addModule.emit(moduleId);
  }

  removeModule(moduleId: string) {
    this.remModule.emit(moduleId);
  }
}
