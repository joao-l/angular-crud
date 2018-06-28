import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2CompleterModule } from 'ng2-completer';
import { PageHeaderModule } from './../../shared';
import {
  DataTableModule,
  SharedModule,
  DialogModule,
  ButtonModule,
  InputSwitchModule,
  ConfirmDialogModule,
  GrowlModule,
  CalendarModule
} from 'primeng/primeng';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserEditComponent } from './user-edit/user-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PageHeaderModule,
    UsersRoutingModule,
    DataTableModule,
    SharedModule,
    DialogModule,
    ButtonModule,
    InputSwitchModule,
    ConfirmDialogModule,
    GrowlModule,
    CalendarModule,
    Ng2CompleterModule,
    NgbModule.forRoot(),
  ],
  declarations: [UsersComponent, UserEditComponent]
})
export class UsersModule { }
