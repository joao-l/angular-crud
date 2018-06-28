import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoinsComponent } from './coins.component';
import { CoinEditComponent } from './coin-edit/coin-edit.component';

const routes: Routes = [
  { path: '', component: CoinsComponent },
  { path: 'edit/:id', component: CoinEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoinsRoutingModule {
}
