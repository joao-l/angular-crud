import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2CompleterModule } from 'ng2-completer';
import { PageHeaderModule, ImagePipe } from './../../shared';
import {
  DataTableModule,
  SharedModule,
  TabViewModule,
  ScrollPanelModule,
  AccordionModule,
  DialogModule,
  GrowlModule,
  ButtonModule,
  InputSwitchModule,
  PanelModule,
  SplitButtonModule
} from 'primeng/primeng';
import { CoinsRoutingModule } from './coins-routing.module';
import { CoinsComponent } from './coins.component';
import { CoinDetailComponent } from './coin-detail/coin-detail.component';
import { CoinEditComponent } from './coin-edit/coin-edit.component';
import { SideDetailComponent } from './coin-detail/side-detail/side-detail.component';
import { GeneralDetailComponent } from './coin-detail/general-detail/general-detail.component';
import { FeaturesDetailComponent } from './coin-detail/features-detail/features-detail.component';
import { EmissionDetailComponent } from './coin-detail/emission-detail/emission-detail.component';
import { IssuerDetailComponent } from './coin-detail/issuer-detail/issuer-detail.component';
import { PublicationDetailComponent } from './coin-detail/publication-detail/publication-detail.component';
import { RemovedDetailComponent } from './coin-detail/removed-detail/removed-detail.component';
import { EmissionEditComponent } from './coin-edit/emission-edit/emission-edit.component';
import { FeaturesEditComponent } from './coin-edit/features-edit/features-edit.component';
import { GeneralEditComponent } from './coin-edit/general-edit/general-edit.component';
import { IssuerEditComponent } from './coin-edit/issuer-edit/issuer-edit.component';
import { PublicationEditComponent } from './coin-edit/publication-edit/publication-edit.component';
import { RemovedEditComponent } from './coin-edit/removed-edit/removed-edit.component';
import { SideEditComponent } from './coin-edit/side-edit/side-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PageHeaderModule,
    CoinsRoutingModule,
    ScrollPanelModule,
    TabViewModule,
    AccordionModule,
    DataTableModule,
    SharedModule,
    DialogModule,
    GrowlModule,
    ButtonModule,
    InputSwitchModule,
    PanelModule,
    SplitButtonModule,
    Ng2CompleterModule,
    NgbModule.forRoot()
  ],
  declarations: [
    CoinsComponent,
    ImagePipe,
    CoinDetailComponent,
    CoinEditComponent,
    SideDetailComponent,
    GeneralDetailComponent,
    FeaturesDetailComponent,
    EmissionDetailComponent,
    IssuerDetailComponent,
    PublicationDetailComponent,
    RemovedDetailComponent,
    EmissionEditComponent,
    FeaturesEditComponent,
    GeneralEditComponent,
    IssuerEditComponent,
    PublicationEditComponent,
    RemovedEditComponent,
    SideEditComponent
  ]
})
export class CoinsModule { }
