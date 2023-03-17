import { CommentsComponent } from './admin/dashboard/comments/comments.component';
import { DefaultComponent } from './admin/default/default.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { PostsComponent } from './admin/dashboard/posts/posts.component';
import { PagesComponent } from './admin/dashboard/pages/pages.component';
import { SettingsComponent } from './admin/dashboard/settings/settings.component';
import { CalendarComponent } from './admin/dashboard/calendar/calendar.component';
import { PendingappointmentComponent } from './admin/dashboard/pendingappointment/pendingappointment.component';
import { UpdatepatientComponent } from './admin/dashboard/updatepatient/updatepatient.component';
import { PatienthistoryComponent } from './admin/dashboard/patienthistory/patienthistory.component';
import { ViewpatienthistoryComponent } from './admin/dashboard/viewpatienthistory/viewpatienthistory.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'posts',
        component: PostsComponent,
      },
      {
        path: 'comments',
        component: CommentsComponent,
      },
      {
        path: 'pages',
        component: PagesComponent,
      },
      {
        path: 'calendar',
        component: CalendarComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
      {
        path: 'update-patient',
        component: UpdatepatientComponent,
      },
      {
        path: 'pending-appointment',
        component: PendingappointmentComponent,
      },
      {
        path: 'patient-history',
        component: ViewpatienthistoryComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
