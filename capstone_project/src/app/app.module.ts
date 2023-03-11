import { AppModuleModule } from './app-module/app-module.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultComponent } from './admin/default/default.component';
import { SidebarComponent } from './admin/shard/sidebar/sidebar.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { PostsComponent } from './admin/dashboard/posts/posts.component';
import { CommentsComponent } from './admin/dashboard/comments/comments.component';
import { PagesComponent } from './admin/dashboard/pages/pages.component';
import { SettingsComponent } from './admin/dashboard/settings/settings.component';
import { CalendarComponent } from './admin/dashboard/calendar/calendar.component';
import { PrescriptionComponent } from './admin/dashboard/prescription/prescription.component';
import { AddPrescriptionDetailsComponent } from './admin/dashboard/add-prescription-details/add-prescription-details.component';
import { ViewPrescriptionComponent } from './admin/dashboard/view-prescription/view-prescription.component';
import { PatientInfoComponent } from './admin/dashboard/patient-info/patient-info.component';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';


@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    SidebarComponent,
    DashboardComponent,
    PostsComponent,
    CommentsComponent,
    PagesComponent,
    SettingsComponent,
    CalendarComponent,
    PrescriptionComponent,
    AddPrescriptionDetailsComponent,
    ViewPrescriptionComponent,
    PatientInfoComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppModuleModule,
    CalendarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
