import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-core-modules',
  templateUrl: './core-modules.component.html',
  styleUrls: ['./core-modules.component.scss'],
})
export class CoreModulesComponent implements OnInit {
  @Output() closeModal = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
