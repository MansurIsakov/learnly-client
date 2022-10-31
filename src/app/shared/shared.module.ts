import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { AlertComponent } from './alert/alert.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [LoadingSpinnerComponent, AlertComponent, NavComponent],
  imports: [CommonModule, RouterModule],
  exports: [LoadingSpinnerComponent, AlertComponent, NavComponent],
})
export class SharedModule {}
