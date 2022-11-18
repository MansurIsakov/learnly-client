import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlertComponent } from './alert/alert.component';
import { LoaderSpinnerComponent } from './loading-spinner/loader.component';
import { NavComponent } from './nav/nav.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormatConstPipe } from './pipes/formatConst.pipe';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    LoaderSpinnerComponent,
    AlertComponent,
    NavComponent,
    FilterPipe,
    FormatConstPipe,
    SearchPipe,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    LoaderSpinnerComponent,
    AlertComponent,
    NavComponent,
    FilterPipe,
    FormatConstPipe,
    SearchPipe,
  ],
})
export class SharedModule {}
