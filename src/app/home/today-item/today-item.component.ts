import { Component, Input, OnInit } from '@angular/core';
import { IClass } from 'src/app/common/types/interfaces';

@Component({
  selector: 'app-today-item',
  templateUrl: './today-item.component.html',
  styleUrls: ['./today-item.component.scss'],
})
export class TodayItemComponent implements OnInit {
  @Input() class: IClass;
  @Input() index: number;

  constructor() {}

  ngOnInit(): void {}
}
