import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.scss'],
})
export class HomeNavComponent implements OnInit {
  navList: { name: string; link: string }[] = [
    { name: 'My Day', link: '/home' },
    { name: 'Profile', link: '/profile' },
    { name: 'Modules', link: '/modules' },
    { name: 'Calendar', link: '/calendar' },
    { name: 'Exams', link: '/exams' },
    { name: 'ToDo', link: '/todo' },
    { name: 'Teachers', link: '/teachers' },
    { name: 'Settings', link: '/settings' },
    { name: 'Admin', link: '/admin' },
  ];
  content: string = 'profile';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onLogout() {
    this.authService.logout();
  }
}
