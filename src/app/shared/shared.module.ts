import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlertComponent } from './alert/alert.component';
import { LoaderSpinnerComponent } from './loading-spinner/loader.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [LoaderSpinnerComponent, AlertComponent, NavComponent],
  imports: [CommonModule, RouterModule],
  exports: [LoaderSpinnerComponent, AlertComponent, NavComponent],
})
export class SharedModule {}
