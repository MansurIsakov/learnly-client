import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang('en');
    translateService.use('en');
  }

  lang: string;

  ngOnInit(): void {}

  onChangeLang(lang: string) {
    this.lang = lang;
    this.translateService.use('en');
  }

  isLangActive(lang: string) {
    return lang === this.lang;
  }
}
