import { Component, OnInit } from '@angular/core';
import { LEVELS } from 'src/app/common/constants/levels.const';
import { formatConstant } from 'src/app/common/helpers/formatConstant';

@Component({
  selector: 'app-uni-widget',
  templateUrl: './uni-widget.component.html',
  styleUrls: ['./uni-widget.component.scss'],
})
export class UniWidgetComponent implements OnInit {
  uniName = 'Westminster International University in Tashkent';
  course = 'Business Information Systems';
  level = '3';
  formatConstant;
  levelsConst = LEVELS;

  constructor() {
    this.formatConstant = formatConstant;
  }

  ngOnInit(): void {}
}
