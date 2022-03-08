import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string= 'Mauro';
  valor:number=1000;

  obj={
    nombre:'Mau'
  }
  mostrarNombre(){
    console.log(this.nombre);
  }
}
