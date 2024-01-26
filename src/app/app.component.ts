import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from './intefaces/Task.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'prueba';
  public tasks:Task[]=[{
    id:1,
  name:'trabajando con angular',
  description:'trabajando el ngfor',
  
  },
{
  id:2,
  name:'trabajando con angular 2',
  description:'trabajando el ngfor 2'
}]

deleteTasks(task:Task){

  this.tasks=this.tasks.filter((t:Task)=>task.id!=t.id)

}

createTask(task:any){
  
  task.id=this.tasks.length+1
  this.tasks.push(task)
console.log(this.tasks)
}
}
