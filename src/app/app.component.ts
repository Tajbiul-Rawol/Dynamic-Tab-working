import { Component, OnInit } from "@angular/core";
import { TabService } from "./tab.service";
import { Tab } from "./tab.model";
import { Comp1Component } from "./components/comp1.component";
import {CompComponent} from "./components/comp.component";
import {Comp2Component} from "./components/comp2.component";
import {RaihanVaiComponent} from "./raihan-vai/raihan-vai.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  tabs = new Array<Tab>();
  selectedTab: number;

  constructor(private tabService: TabService) {}

    removeTab($event): void {
      this.tabService.removeTab($event.index);
      // if (this.tabs.length === 0) {
      //   this.tabs[0].active = true;
      // }
    }


  ngOnInit() {
    this.tabService.tabSub.subscribe(tabs => {
      this.tabs = tabs;
      this.selectedTab = 0;
    });
  }

  tabChanged(event) {
    console.log("tab changed");
  }

  addNewTab(title:string) {
    if (title === "Raihan Vai") {
      this.tabService.addTab(
        new Tab(RaihanVaiComponent, "Raihan Vai", { parent: "AppComponent" }, true)
      );
    }
    else if (title === "Comp View") {
      this.tabService.addTab(
        new Tab(CompComponent, "Comp View", { parent: "AppComponent" }, true)
      );
    }
    else if (title === "Comp1 View") {
      this.tabService.addTab(
        new Tab(Comp1Component, "Comp1 View", { parent: "AppComponent" }, true)
      );
    }
    else if (title === "Comp2 View") {
      this.tabService.addTab(
        new Tab(Comp2Component, "Comp2 View", { parent: "AppComponent" }, true)
      );
    }
    this.selectedTab = this.tabs.findIndex(tab => tab.active);
  }

  
}
