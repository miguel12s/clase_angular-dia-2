import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../intefaces/Task.interface';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrl: './list-task.component.css'
})
export class ListTaskComponent {
@Input() tasks!:Task[]
@Output() deleteTasks:EventEmitter<Task>=new EventEmitter()

deleteTask(new_task:Task){
  // let newTask:Task[]=this.tasks.filter((task:Task)=>{
  //   console.log(task.id,new_task.id)
    
  // })
  // console.log(newTask);
  
  // this.tasks=newTask
  
  this.deleteTasks.emit(new_task)
}


}
