import { Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-chart',
  standalone:true,
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  //@ts-ignore
  items;
  constructor(private route: ActivatedRoute ,private router: Router ) {}

  ngOnInit(): void {
    //@ts-ignore
    this.items = this.route.snapshot.params
    console.log(this.items)
  }

}
