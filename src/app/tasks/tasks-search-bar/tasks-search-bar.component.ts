import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tasks-search-bar',
  templateUrl: './tasks-search-bar.component.html',
  styleUrls: ['./tasks-search-bar.component.scss'],
})
export class TasksSearchBarComponent implements OnInit {
  @Output() searchEvent: any = new EventEmitter<string>();

  constructor() {}

  searchValue: string = '';

  onSearchChange() {
    this.searchEvent.emit(this.searchValue);
  }

  ngOnInit(): void {}
}
