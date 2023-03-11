import { CommentsComponent } from './admin/dashboard/comments/comments.component';
import { DefaultComponent } from './admin/default/default.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { PostsComponent } from './admin/dashboard/posts/posts.component';
import { PagesComponent } from './admin/dashboard/pages/pages.component';
import { SettingsComponent } from './admin/dashboard/settings/settings.component';
import { CalendarComponent } from './admin/dashboard/calendar/calendar.component';
import { PrescriptionComponent } from './admin/dashboard/prescription/prescription.component';
import { PatientInfoComponent } from './admin/dashboard/patient-info/patient-info.component';

const routes: Routes = [
  { 
    path:"", component: DefaultComponent,
    children:[
      {
        path: '', component: PrescriptionComponent 
      },
      {
        path: 'posts', component: PostsComponent
      },
      {
        path: 'comments', component: CommentsComponent
      },
      {
        path: 'pages', component: PagesComponent
      },
      {
        path: 'calendar', component: CalendarComponent
      },
      {
        path: 'settings', component: SettingsComponent
      },
      {
        path: 'prescription', component: PrescriptionComponent
      },
      {
        path: 'patient-info', component: PatientInfoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
