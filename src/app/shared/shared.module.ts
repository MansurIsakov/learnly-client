import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModulesComponent } from './core-modules/core-modules.component';
import { AlertComponent } from './alert/alert.component';
import { LoaderSpinnerComponent } from './loading-spinner/loader.component';
import { NavComponent } from './nav/nav.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormatConstPipe } from './pipes/formatConst.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { ScheduleClassComponent } from '../schedule/schedule-list/schedule-class/schedule-class.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    LoaderSpinnerComponent,
    AlertComponent,
    NavComponent,
    FilterPipe,
    FormatConstPipe,
    SearchPipe,
    ScheduleClassComponent,
    CoreModulesComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [
    LoaderSpinnerComponent,
    AlertComponent,
    NavComponent,
    FilterPipe,
    FormatConstPipe,
    SearchPipe,
    CoreModulesComponent,
    ScheduleClassComponent,
  ],
})
export class SharedModule {}
