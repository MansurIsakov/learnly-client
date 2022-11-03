import { Component } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderSpinnerComponent {
  isLoading$ = this.loaderService.isLoading$;

  constructor(private loaderService: LoaderService) {}
}
