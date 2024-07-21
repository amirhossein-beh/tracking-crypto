import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [
    NgClass,
    NgIf
  ],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {
  @Input() preIcon:string|undefined;
  @Input() appendIcon:string|undefined;
  @Input() class:string|undefined;
  @Input() value:string|undefined;

  // @Output() event = new EventEmitter();
  //
  // onClick(){
  //   this.event.emit()
  // }
}
