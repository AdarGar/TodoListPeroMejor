import { Injectable } from '@angular/core';
import axios from 'axios';
import { ToDo } from '../models/to-do';
@Injectable({
  providedIn: 'root'
})
export class EditarListaService {

  constructor() { }
  getAllToDos():Promise<ToDo[]>{
    return axios.get<ToDo[]>("https://jsonplaceholder.typicode.com/todos").then(resp=> resp.data);
  }
  postTask(title:string): Promise<ToDo>{
   return axios.post<ToDo>("https://jsonplaceholder.typicode.com/todos", {title: title, completed: false}).then(resp=> resp.data);
    
  }
  deleteTask(id: number): Promise<string>{
    return axios.delete("https://jsonplaceholder.typicode.com/todos/"+id).then(res => res.statusText)
  }
  editTask(id: number, title: string): Promise<string>{
    return axios.put("https://jsonplaceholder.typicode.com/todos/"+id, {title: title, completed: false}).then(res => res.statusText)
  }
  getTaskById( id : number ):Promise<ToDo>{
    return axios.get<ToDo>("https://jsonplaceholder.typicode.com/todos/"+id).then(resp=> resp.data);
  }
}
