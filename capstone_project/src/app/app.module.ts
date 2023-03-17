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
import { PendingappointmentComponent } from './admin/dashboard/pendingappointment/pendingappointment.component';
import { UpdatepatientComponent } from './admin/dashboard/updatepatient/updatepatient.component';
import { EnterprescriptionComponent } from './admin/dashboard/enterprescription/enterprescription.component';
import { ViewprescriptionComponent } from './admin/dashboard/viewprescription/viewprescription.component';
import { NewobservationComponent } from './admin/dashboard/newobservation/newobservation.component';
import { EditobservationComponent } from './admin/dashboard/editobservation/editobservation.component';
import { DeleteobservationComponent } from './admin/dashboard/deleteobservation/deleteobservation.component';
import { ViewpatienthistoryComponent } from './admin/dashboard/viewpatienthistory/viewpatienthistory.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
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
    PendingappointmentComponent,
    UpdatepatientComponent,
    EnterprescriptionComponent,
    ViewprescriptionComponent,
    NewobservationComponent,
    EditobservationComponent,
    DeleteobservationComponent,
    ViewpatienthistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppModuleModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
