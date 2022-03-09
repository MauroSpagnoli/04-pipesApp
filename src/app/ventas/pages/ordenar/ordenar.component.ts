import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  enMayusculas:boolean=true;
  ordenarPor: string='';

  constructor() { }

  ngOnInit(): void {
  }

  heroes:Heroe[]=[{
    nombre:'Superman',
    vuela:true,
    color:Color.azul
  },
  {
    nombre:'Batman',
    vuela:false,
    color:Color.verde
  },
  {
    nombre:'Daredevil',
    vuela:false,
    color:Color.rojo
  },
  {
    nombre:'Green Lantern',
    vuela:false,
    color:Color.verde
  }
];

  cambiar(){
    this.enMayusculas = !this.enMayusculas;
  }


  cambiarOrden(valor:string){
    this.ordenarPor = valor;
  }

}
