import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Task } from "../../Task";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { UiService } from "../../services/ui.service";

@Component({
  selector: "app-task-item",
  templateUrl: "./task-item.component.html",
  styleUrls: ["./task-item.component.css"]
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;
  showAddTasks: boolean = false;

  constructor(
    private uiService: UiService
  ) {
    this.uiService.onToggle().subscribe(value => this.showAddTasks = value);
  }

  ngOnInit() {}

  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task) {
    this.onToggleReminder.emit(task);
  }
}
