import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ChartModule } from 'primeng/chart';

@NgModule({
  imports: [
    CommonModule,
    ChartModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }
