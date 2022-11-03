import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLoading$ = this.loadingSpinner.isLoading$;

  constructor(
    private authService: AuthService,
    private loadingSpinner: LoadingService
  ) {}

  ngOnInit(): void {
    this.authService.autoLogin();
  }
}
