import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ToDo } from '../models/to-do';
import { EditarListaService } from '../services/editar-lista.service';

@Component({
  selector: 'app-to-do-it',
  templateUrl: './to-do-it.component.html',
  styleUrls: ['./to-do-it.component.css']
})
export class ToDoItComponent implements OnInit {
editando: boolean= false;
task: string = "";
  constructor(private editTask: EditarListaService) { }
  @Input() todo: ToDo={
    userId: 0,
    id: 0,
    title: "",
    completed: false
  }
  @Output() delet = new EventEmitter();
  @Output() edit = new EventEmitter();
  ngOnInit(): void {
  }
  showEdit(){
  if(this.editando === false){
   
    this.editTask.getTaskById(this.todo.id).then(res => { this.task =res.title ; this.editando = true});
    
  } else{
    this.editando = false;
  }
 
  }
  editMeFhater(){

    this.edit.emit({id: this.todo.id, title: this.task});
    this.editando = false;
    
  }
  deleteMeFhater(){

    this.delet.emit(this.todo.id)
  }
}
