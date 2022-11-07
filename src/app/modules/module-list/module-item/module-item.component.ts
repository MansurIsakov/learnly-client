import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module-item',
  templateUrl: './module-item.component.html',
  styleUrls: ['./module-item.component.scss'],
})
export class ModuleItemComponent implements OnInit {
  hexString = '0123456789abcdef';

  constructor() {}

  ngOnInit(): void {}

  randomColor = () => {
    let hexCode = '#';
    for (let i = 0; i < 6; i++) {
      hexCode +=
        this.hexString[Math.floor(Math.random() * this.hexString.length)];
    }
    return hexCode;
  };

  generateGrad = () => {
    let colorOne = this.randomColor();
    let colorTwo = this.randomColor();
    let angle = Math.floor(Math.random() * 360);

    return `linear-gradient(${angle}deg, ${colorOne}, ${colorTwo})`;
  };
}
