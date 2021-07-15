import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router  } from '@angular/router';
import { ComunicacionService } from './servicios/servicios-componentes/comunicacion-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'portalDePagos';
  
  constructor(
    public router: Router,
    public comunicacionService:ComunicacionService
    ){

      
      
  }

  ngOnInit() {
    //solo se carga la primera vez
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {

        //se valida que cuando se carga la pagina se cargue el formulario solo con la
        //ruta que se evalua
        if(e.url == '/'){

          this.router.navigate(['acceso']);

        }
        
      }
    }); 


    

    //this.crearEnLocalStorage();
    
  }

}
