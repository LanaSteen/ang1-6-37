import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Footer } from './footer/footer';
import { Home } from "./home/home";
import { Restaurant } from './restaurant/restaurant';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Home, Restaurant],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {


}


