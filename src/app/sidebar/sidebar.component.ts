import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  // component: Component;
  // title: string;
  // parent: string;

  constructor() { }

  @Output() public event =  new EventEmitter<{component: Component, title: string, parent: string}>(); 
  ngOnInit() {

  }

  sendData(component,title, parent){
     this.event.emit({component, title, parent});
  }

}
