import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string ='mauro';
  nombreUpper: string ='Mauro';
  nombreCompleto:string='MauRo SpAGNoli'

  fecha:Date = new Date();
}
