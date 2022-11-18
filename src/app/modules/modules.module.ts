import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CoreModulesComponent } from '../modals/core-modules/core-modules.component';
import { SharedModule } from '../shared/shared.module';
import { ModuleInfoComponent } from './module-info/module-info.component';
import { ModuleItemComponent } from './module-list/module-item/module-item.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { ModuleNavComponent } from './module-nav/module-nav.component';
import { ModulesRoutingModule } from './modules-routing.module';
import { ModulesComponent } from './modules.component';

@NgModule({
  declarations: [
    ModulesComponent,
    ModuleInfoComponent,
    ModuleListComponent,
    ModuleNavComponent,
    ModuleItemComponent,
    CoreModulesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ModulesRoutingModule,
    FormsModule,
  ],
  exports: [
    ModulesComponent,
    ModuleInfoComponent,
    ModuleListComponent,
    ModuleNavComponent,
    ModuleItemComponent,
    CoreModulesComponent,
  ],
})
export class ModulesModule {}
