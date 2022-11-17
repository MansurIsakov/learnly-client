import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Color } from '../common/types/colors';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  public get Colors(): typeof Color {
    return Color;
  }

  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang('en');
    translateService.use('en');
  }

  lang: string;

  ngOnInit(): void {}

  onChangeLang(lang: string) {
    this.lang = lang;
    this.translateService.use(lang);
  }

  isLangActive(lang: string) {
    return lang === this.lang;
  }

  changeColor(color: Color) {
    switch (color) {
      case Color.Teal:
        document.documentElement.style.setProperty('--primary', 'teal');
        localStorage.setItem('color', 'teal');
        break;
      case Color.Violet:
        document.documentElement.style.setProperty('--primary', '#5f66c3');
        localStorage.setItem('color', '#5f66c3');
        break;
      case Color.Cappucino:
        document.documentElement.style.setProperty('--primary', '#4e2320');
        localStorage.setItem('color', '#4e2320');
        break;
      case Color.Midnight:
        document.documentElement.style.setProperty('--primary', '#18184d');
        localStorage.setItem('color', '#18184d');
        break;
    }
    // document.documentElement.style.setProperty('--primary', color);
  }
}
