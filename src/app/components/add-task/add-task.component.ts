import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from "../../Task";
import { UiService } from "../../services/ui.service";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string = '';
  time: string = '';
  reminder: boolean = false;
  showAddTasks: boolean = false;

  constructor(
    private uiService: UiService
  ) {
    this.uiService.onToggle().subscribe(value => this.showAddTasks = value);
   }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.text.trim() === '' || this.time.trim() === '') {
      alert("Input is empty");
      return;
    }

    const newTask: Task = {
      text: this.text,
      day: this.time,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask);

    this.text = '';
    this.time = '';
    this.reminder = false;
    this.uiService.toggleAddTasks();
  }
}
