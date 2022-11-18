import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { CoreModule } from './core.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { AuthInterceptorService } from './interceptors/auth-interceptor.service';
import { TeachersModule } from './teachers/teachers.module';
import { LoaderInterceptor } from './interceptors/loader-interceptor.service';
import { SettingsComponent } from './settings/settings.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ModulesModule } from './modules/modules.module';
import { HomeModule } from './home/home.module';
import { ProfileModule } from './profile/profile.module';
import { ScheduleModule } from './schedule/schedule.module';
import { TasksModule } from './tasks/tasks.module';
import { ExamsModule } from './exams/exams.module';

@NgModule({
  declarations: [AppComponent, NotFoundComponent, SettingsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    TeachersModule,
    CoreModule,
    TasksModule,
    SharedModule,
    HomeModule,
    ProfileModule,
    ModulesModule,
    ScheduleModule,
    ExamsModule,
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
