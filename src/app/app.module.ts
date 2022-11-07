import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { UniWidgetComponent } from './home/uni-widget/uni-widget.component';
import { GoalsWidgetComponent } from './home/goals-widget/goals-widget.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { AuthInterceptorService } from './interceptors/auth-interceptor.service';
import { TeachersModule } from './teachers/teachers.module';
import { LoaderInterceptor } from './interceptors/loader-interceptor.service';
import { ModulesComponent } from './modules/modules.component';
import { ModuleInfoComponent } from './modules/module-info/module-info.component';
import { ModuleNavComponent } from './modules/module-nav/module-nav.component';
import { ModuleListComponent } from './modules/module-list/module-list.component';
import { ModuleItemComponent } from './modules/module-list/module-item/module-item.component';
import { CoreModulesComponent } from './modals/core-modules/core-modules.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    UniWidgetComponent,
    GoalsWidgetComponent,
    ProfileComponent,
    ProfileEditComponent,
    ModulesComponent,
    ModuleInfoComponent,
    ModuleNavComponent,
    ModuleListComponent,
    ModuleItemComponent,
    CoreModulesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    TeachersModule,
    CoreModule,
    SharedModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
