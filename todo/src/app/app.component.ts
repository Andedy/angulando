import { Todo } from './../models/todo.model';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public mode = 'list'
  public todos: Todo[] = [];
  public title: String = 'Minhas tarefas'
  public form: FormGroup

  
  //ctor 
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])]
    })
    
    this.load()

    // this.todos.push(new Todo(1, 'Passear com o dog', false))
    // this.todos.push(new Todo(2, 'Passear sozinho', false))
    // this.todos.push(new Todo(3, 'Ir no mercado', true))
  }

  add() {
    const title = this.form.controls['title'].value //pegando a tarefa aqui
    const id = this.todos.length + 1
    this.todos.push(new Todo(id, title, false))
    this.save()
    this.clear()
  }

  clear (){
    this.form.reset()
  }

  remove(todo: Todo) {
    const index = this.todos.indexOf(todo)
    if(index !== -1){ //se for -1 ele nao encontrou nada na lista
      this.todos.splice(index,1)
    }
    this.save()
  }

  markAsDone(todo: Todo) {
    todo.done = true;
    this.save()
  }

  markAsUndone(todo: Todo) {  
    todo.done = false;
    this.save()
  }

  save() { //salvando no localstorage do navegador pra treinar e entender
    const data = JSON.stringify(this.todos)
    localStorage.setItem('todos', data)
    this.mode = 'list'
  }

  load(){ //lendo dados do localstorage
    const data = localStorage.getItem('todos')
    if (data){
      this.todos = JSON.parse(data)
    } else {
      this.todos = []
    }
  }

  changeMode(mode:string){
    this.mode = mode;
  }

}
