import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from '../servicios/servicios-componentes/comunicacion-service.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent{

  usuarioEnSesion:string | null;

  constructor(
    private comunicacionService:ComunicacionService
  ) { 

    
    this.usuarioEnSesion = localStorage.getItem("usuario");
    

  }

  ngOnInit(){

    
  }

  ngOnDestroy(){

    localStorage.removeItem("usuario");

  }

}
