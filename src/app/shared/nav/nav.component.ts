import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  userId = JSON.parse(localStorage.getItem('userData')!)._id;

  navList: { name: string; link: string }[] = [
    { name: 'My Day', link: '/home' },
    { name: 'Profile', link: `/profile/${this.userId}` },
    { name: 'Modules', link: '/modules' },
    { name: 'Calendar', link: '/calendar' },
    { name: 'Exams', link: '/exams' },
    { name: 'ToDo', link: '/todo' },
    { name: 'Teachers', link: '/teachers' },
    { name: 'Settings', link: '/settings' },
    { name: 'Admin', link: '/admin' },
  ];

  onLogout() {
    this.authService.logout();
  }
}
