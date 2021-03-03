import {Component, Input} from '@angular/core';

@Component({
  templateUrl: '../comp/comp.component.html'
})
export class CompComponent {
  @Input() data;
}
