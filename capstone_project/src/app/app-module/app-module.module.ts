import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatDatepickerModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';

import {MatDialogModule} from '@angular/material/dialog';

import {MatSnackBarModule} from '@angular/material/snack-bar';



const modules = [MatIconModule, MatToolbarModule, MatButtonModule, MatSidenavModule,MatListModule, MatCardModule, MatSelectModule, MatBadgeModule, MatTooltipModule, MatDatepickerModule, MatFormFieldModule, MatTableModule, MatMenuModule, MatPaginatorModule, MatDialogModule, MatSnackBarModule]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modules
  ],
  exports:[
    MatIconModule,
    modules
  ]
})
export class AppModuleModule { }
