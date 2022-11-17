import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { IModule } from 'src/app/models/module.model';
import { ModulesService } from '../modules.service';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.scss'],
})
export class ModuleListComponent implements OnInit, OnDestroy {
  @Input() modules: IModule[];
  @Input() canBeChanged;
  @Output() onSelectModule: EventEmitter<IModule> = new EventEmitter();

  subs: Subscription[] = [];

  response: string = null;

  constructor(private modulesService: ModulesService) {}

  ngOnInit(): void {}

  onHandleError() {
    this.response = null;
  }

  onTakeModule(moduleId: string) {
    this.subs.push(
      this.modulesService.addModule(moduleId).subscribe(
        () => {
          this.response = 'Successfully added module';
        },
        (errorMessage) => {
          this.response = errorMessage;
        }
      )
    );
  }

  onRemoveModule(moduleId: string) {
    this.subs.push(
      this.modulesService.removeModule(moduleId).subscribe(
        () => {
          this.response = 'Successfully removed module';
        },
        (errorMessage) => {
          this.response = errorMessage;
        }
      )
    );
  }

  selectModule(module: IModule) {
    this.onSelectModule.emit(module);
  }

  ngOnDestroy(): void {
    if (this.subs.length > 0) {
      this.subs.forEach((sub) => sub.unsubscribe());
    }
  }
}
