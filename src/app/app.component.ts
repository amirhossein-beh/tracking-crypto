import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TableCoinComponent} from "../components/table-coin.component/table-coin.component";
import {NavigationComponent} from "../components/navigation.component/navigation.component";
import {ChartComponent} from "../components/chart.component/chart.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TableCoinComponent, NavigationComponent, ChartComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ChartCoins';
}
