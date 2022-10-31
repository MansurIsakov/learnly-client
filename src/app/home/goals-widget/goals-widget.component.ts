import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goals-widget',
  templateUrl: './goals-widget.component.html',
  styleUrls: ['./goals-widget.component.scss'],
})
export class GoalsWidgetComponent implements OnInit {
  name: string = 'Mansur';

  constructor() {}

  ngOnInit(): void {}
}
