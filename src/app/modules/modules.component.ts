import { Component, OnInit } from '@angular/core';
import { ModulesService } from './modules.service';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss'],
})
export class ModulesComponent implements OnInit {
  error: string = null;
  isCoreModulesNeeded: boolean = false;
  userId: string = JSON.parse(localStorage.getItem('userData'))._id;

  constructor(private modulesService: ModulesService) {}

  ngOnInit(): void {
    this.isCoreModulesNeeded = this.modulesService.isModulesEmpty();
    console.log(this.isCoreModulesNeeded);
  }

  onHandleError() {
    this.error = null;
  }

  onFetchCoreModules() {
    // Anton ask about userId

    this.onCloseModal();
    this.modulesService.setCoreModules(this.userId).subscribe((resData) => {
      console.log(resData.results.modules);

      this.modulesService.userModules = resData.results.modules;
      console.log(this.modulesService.userModules);
    });
  }

  onCloseModal() {
    this.isCoreModulesNeeded = false;
  }
}
