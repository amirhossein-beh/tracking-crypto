import { Component , OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NgForOf} from "@angular/common";
import {ButtonsComponent} from "../buttons/buttons.component";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";


@Component({
  selector: 'app-show-coins',
  standalone: true,
  imports: [
    NgForOf,
    ButtonsComponent
  ],
  templateUrl: './show-coins.component.html',
  styleUrl: './show-coins.component.scss'
})
export class ShowCoinsComponent implements OnInit{
//@ts-ignore
  items;
  constructor(private route: ActivatedRoute ,private router: Router ) {}
  ngOnInit(): void {
    //@ts-ignore
      this.items = this.route.snapshot.params
      console.log(this.items)
    }

    back(){
      this.router.navigate(["" , ])
    }

    testlog(){
      this.router.navigate(["/chart", this.items.symbol])
     }
}
