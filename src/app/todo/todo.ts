import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [FormsModule, CommonModule ],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class Todo {


  ngOnInit(){
      this.tasks = JSON.parse(localStorage.getItem("tsks") || "" )
  }


  newTask = ""

  addTask(){
    this.tasks.push({
      id : this.tasks.length+1,
      title : this.newTask,
      completed : false
    })
    this.newTask = ""
    console.log(this.tasks);
    localStorage.setItem("tsks", JSON.stringify(this.tasks))
    
  }
compliteTask(obj : any){
   obj.completed = !obj.completed
       localStorage.setItem("tsks", JSON.stringify(this.tasks))
}

deleteTask(obj :any){
   this.tasks = this.tasks.filter(el => el.id != obj.id)
       localStorage.setItem("tsks", JSON.stringify(this.tasks))
}

  tasks : any[] = []
}
