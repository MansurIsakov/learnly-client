import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-core-modules',
  templateUrl: './core-modules.component.html',
  styleUrls: ['./core-modules.component.scss'],
})
export class CoreModulesComponent implements OnInit {
  @Input() title: string;
  @Input() text: string;
  @Output() closeModal = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
