import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {
@Output() add:EventEmitter<any>=new EventEmitter()
  
  task:{name?:string,description?:string}={}


  addTask(){
    
    this.add.emit(this.task)
    
  }

}
