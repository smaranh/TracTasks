import { Component, OnInit } from "@angular/core";
import { UiService } from "../../services/ui.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  title = "Task Tracker";
  showAddTasks: boolean = false;

  constructor(
    private uiService: UiService,
    private router: Router
  ) {
    this.uiService.onToggle().subscribe(value => this.showAddTasks = value);
  }

  ngOnInit() {}

  toggleAddTask() {
    this.uiService.toggleAddTasks();
  }

  hasRoute(path: string): boolean {
    return this.router.url === path;
  }
}