import { Component } from '@angular/core';
import { ToDo } from './models/to-do';
import { EditarListaService } from './services/editar-lista.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toDoList: ToDo[]= [];
  task: string= "";
  constructor(private useListToDo: EditarListaService){
    useListToDo.getAllToDos().then(res=> this.toDoList = res);
  }
  addTask(){
    this.useListToDo.postTask(this.task).then(res => this.toDoList.push(res));

  }
 editTask(task: ToDo){
  this.useListToDo.editTask(task.id, task.title).then(res => {
   
    (this.toDoList.find(el => el.id === task.id) as ToDo).title = task.title
  });
}
  deleteTask(id:number){
    this.useListToDo.deleteTask(id).then(res => {
      
      this.toDoList = this.toDoList.filter(el => el.id != id)
    });
    
  }
  title = 'toDoList';
}
