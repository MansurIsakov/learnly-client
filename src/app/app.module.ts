import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
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
import { ScheduleComponent } from './schedule/schedule.component';
import { ScheduleListComponent } from './schedule/schedule-list/schedule-list.component';
import { ScheduleItemComponent } from './schedule/schedule-list/schedule-item/schedule-item.component';
import { ScheduleEditComponent } from './schedule-edit/schedule-edit.component';
import { ScheduleEditItemComponent } from './schedule-edit/schedule-edit-list/schedule-edit-list/schedule-edit-item/schedule-edit-item.component';
import { ScheduleEditListComponent } from './schedule-edit/schedule-edit-list/schedule-edit-list/schedule-edit-list.component';
import { ScheduleDaysComponent } from './schedule-edit/schedule-days/schedule-days.component';
import { SettingsComponent } from './settings/settings.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ExamsComponent } from './exams/exams.component';
import { ExamsItemComponent } from './exams/exams-item/exams-item.component';
import { ExamModalComponent } from './modals/exam-modal/exam-modal.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksItemComponent } from './tasks/tasks-item/tasks-item.component';
import { TasksModalComponent } from './modals/tasks-modal/tasks-modal.component';
import { TasksSearchBarComponent } from './tasks/tasks-search-bar/tasks-search-bar.component';
import { ScheduleClassComponent } from './schedule/schedule-list/schedule-class/schedule-class.component';
import { ModulesModule } from './modules/modules.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    UniWidgetComponent,
    GoalsWidgetComponent,
    ProfileComponent,
    ProfileEditComponent,
    ScheduleComponent,
    ScheduleListComponent,
    ScheduleItemComponent,
    ScheduleEditComponent,
    ScheduleEditListComponent,
    ScheduleEditItemComponent,
    ScheduleDaysComponent,
    SettingsComponent,
    ExamsComponent,
    ExamsItemComponent,
    ExamModalComponent,
    TasksComponent,
    TasksItemComponent,
    TasksModalComponent,
    TasksSearchBarComponent,
    ScheduleClassComponent,
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
    ModulesModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [HttpClient],
      },
    }),
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

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
