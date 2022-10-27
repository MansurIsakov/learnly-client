import { Component, OnInit } from '@angular/core';
import { LEVELS } from 'src/app/common/constants/levels.const';

@Component({
  selector: 'app-uni-widget',
  templateUrl: './uni-widget.component.html',
  styleUrls: ['./uni-widget.component.scss'],
})
export class UniWidgetComponent implements OnInit {
  uniName = 'Westminster International University in Tashkent';
  course = 'Business Information Systems';
  level = '3';

  constructor() {}

  ngOnInit(): void {}

  levelFormat(level: string): string {
    const index = LEVELS.findIndex((el) => el.levelNumber === level);
    return index > -1 ? LEVELS[index].level : '';
  }
}
