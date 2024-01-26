import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Task } from '../../intefaces/Task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
@Input() task!:Task
@Output() deleteTask:EventEmitter<Task>=new EventEmitter()

delete(task:Task){
  console.log(task);
  
  this.deleteTask.emit(task)
}
}
