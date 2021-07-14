import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddTasks: boolean = false;
  private subj = new Subject<any>();

  constructor() { }

  toggleAddTasks(): void {
    this.showAddTasks = !this.showAddTasks;
    this.subj.next(this.showAddTasks);
  }

  onToggle(): Observable<any> {
    return this.subj.asObservable();
  }
}
