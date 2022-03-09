import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent{

  nombre: string ='Mauro';
  genero: string ='femenino';
  invitacionMapa={
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  clientes:string[]=['Maria','Pepe','Juan','Jose'];
  clientesMapa={
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarCliente(){
    this.nombre= 'Melissa';
    this.genero ='femenino';
  }

  borrarCliente(){
    this.clientes.pop();
  }

  //KeyValue Pipe
  persona={
    nombre:'Mauro',
    edad:54,
    ciudad:'Ottawa'
  }


  heroes=[
    {
      nombre:'Superman',
      vuela:true
    },
    {
      nombre:'Aquaman',
      vuela:false
    },
    {
      nombre:'Robin',
      vuela:false
    }
  ]

  miObservable = interval(1000);

  valorPromesa = new Promise( (resolve,reject)=>{
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  })
}
