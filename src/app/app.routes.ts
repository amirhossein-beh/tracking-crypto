import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TableCoinComponent } from '../components/table-coin.component/table-coin.component';
import { ChartComponent } from '../components/chart.component/chart.component';
import {ShowCoinsComponent} from "../components/show-coins.componenet/show-coins.component";


export const routes: Routes = [
  {path: '', redirectTo: '/table-coin', pathMatch: 'full' },
  {path:'table-coin', component: TableCoinComponent},
  {path: 'chart/:symbol', component: ChartComponent },
  {path:'detail' , component:ShowCoinsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
