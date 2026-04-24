import { ChangeDetectorRef, Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Footer } from './footer/footer';
import { Home } from "./home/home";
import { Restaurant } from './restaurant/restaurant';
import { Todo } from "./todo/todo";
import { ReactiveForm } from './reactive-form/reactive-form';
import { ChildSelector } from './child-selector/child-selector';
import { Alert } from "./alert/alert";
import { Dialog } from './services/dialog';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Home, Restaurant, Todo, ReactiveForm, ChildSelector, Alert],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {

  constructor(public dialog : Dialog){

    effect(() => {
     this.alertShow.set(this.dialog.state())

    }


  )

  }

  alertShow = signal(false)

}


