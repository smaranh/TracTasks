import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Task } from "../Task";

const headerOptions = {
  headers: {
    "Content-Type": "application/json"
  }
};

@Injectable({
  providedIn: "root"
})

export class TaskService {

  apiUrl = "http://localhost:5000/tasks";

  constructor(
    private http: HttpClient
  ) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<void> {
    const deleteApiUrl = `${this.apiUrl}/${task.id}`;
    return this.http.delete<void>(deleteApiUrl);
  }

  updateToggleReminder(task: Task): Observable<void> {
    const updateApiUrl = `${this.apiUrl}/${task.id}`;
    return this.http.put<void>(updateApiUrl, task, headerOptions);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, headerOptions);
  }
}
