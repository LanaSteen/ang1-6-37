import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Active } from '../directives/active';


@Component({
  selector: 'app-template-test',
  imports: [CommonModule, Active],
  templateUrl: './template-test.html',
  styleUrl: './template-test.scss',
})
export class TemplateTest {}
