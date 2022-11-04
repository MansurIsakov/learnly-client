import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss'],
})
export class ModulesComponent implements OnInit {
  error: string = null;

  constructor() {}

  ngOnInit(): void {}

  onHandleError() {
    this.error = null;
  }
}
