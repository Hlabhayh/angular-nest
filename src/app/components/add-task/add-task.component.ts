import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  subject: string;
  date: string;
  reminder: boolean = false;
  showAddTask: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((val) => (this.showAddTask = val));
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.subject || !this.date) {
      alert('please please make sure to add name and date of task ');
      return;
    }

    const newTask = {
      subject: this.subject,
      date: this.date,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);

    this.subject = '';
    this.date = '';
    this.reminder = false;
  }
}
