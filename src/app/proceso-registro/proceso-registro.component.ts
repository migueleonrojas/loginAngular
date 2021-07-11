import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proceso-registro',
  templateUrl: './proceso-registro.component.html',
  styleUrls: ['./proceso-registro.component.css']
})
export class ProcesoRegistroComponent implements OnInit {

  formularioValidado:boolean=false;

  datosFormulario:any;

  constructor() { }

  ngOnInit(): void {
  }

  
  obtenerValid(e:boolean){

    this.formularioValidado = e;
    
  }

  obtenerForm(e:any){

    console.log(e);
    this.datosFormulario= e;
  }

}
