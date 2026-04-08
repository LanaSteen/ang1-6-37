import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../models/task';
import { Button } from "../button/button";

@Component({
  selector: 'app-todo',
  imports: [FormsModule, CommonModule, Button],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class Todo {


  // constructor(private cdr : ChangeDetectorRef){

    
  // }


  clasSaxeli = "comp"
  addText = "Add"
  btnTaxtFromParent = "Satrt make your list"

  changeTExt(){
    this.btnTaxtFromParent = "done"
  }

  ngOnInit(){
     this.tasks = JSON.parse(localStorage.getItem("tsks") || "[]" )
  }


  isChildBtnClicked = false

  getInfoFromChild(event : any){
    this.isChildBtnClicked = event
    // this.cdr.detectChanges()
    console.log(event);
    
  }

  tasks : Task[] = []
  newTask = ""
  taskPriority = 1

  addTask(){
    this.tasks.push({
      id : Date.now(),
      title : this.newTask,
      completed : false,
      priority : this.taskPriority
    })
    this.newTask = ""
    this.taskPriority = 1
     this.addText = "Add"
    console.log(this.tasks);
    localStorage.setItem("tsks", JSON.stringify(this.tasks))
    
  }
compliteTask(obj : Task){
   obj.completed = !obj.completed
   localStorage.setItem("tsks", JSON.stringify(this.tasks))
}

deleteTask(obj :Task){
   this.tasks = this.tasks.filter(el => el.id != obj.id)
       localStorage.setItem("tsks", JSON.stringify(this.tasks))
}

editTaks(item : Task, ind : number){
    this.newTask = item.title!
    this.taskPriority = item.priority
    this.addText = "Save Changes"
    this.tasks.splice(ind, 1)
    localStorage.setItem("tsks", JSON.stringify(this.tasks))


}

}
