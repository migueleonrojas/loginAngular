import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OperacionBbddService } from '../servicios/servicios-bbdd/operacion-bbdd.service';
import { FormGroup, FormBuilder, Validator, Validators, FormControl, AbstractControl } from '@angular/forms';
import { ContieneEspacios } from '../signin/validators/clave-confirm.validator';
import { Output, EventEmitter } from '@angular/core';
import { ComunicacionService } from '../servicios/servicios-componentes/comunicacion-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  formularioLogin: FormGroup | any;
  validacionLogin: any;
  usuarioRegistrado:boolean = true;

  constructor(
    private router: Router,
    private operacionBbddService: OperacionBbddService,
    private fromBuilder: FormBuilder,
    private comunicacionService:ComunicacionService
  
  ){

    this.formularioLogin = this.fromBuilder.group({

      nombreUsuario: [ '' , [Validators.required, ContieneEspacios, Validators.minLength(6), Validators.maxLength(20) ] ],
      claveUsuario:  [ '' , [Validators.required, Validators.minLength(6), Validators.maxLength(20) , ContieneEspacios] ],


    });

    
   }


  accediendo(formulariologin:any){

    
    this.operacionBbddService.loginUsuario({

      Usuario: formulariologin.controls.nombreUsuario.value,
      Clave: formulariologin.controls.claveUsuario.value

    }).subscribe(respuesta => {

      this.validacionLogin = respuesta;

      console.log(respuesta);

      if(this.validacionLogin.usuario != null ){

        localStorage.setItem("usuario", formulariologin.controls.nombreUsuario.value);   
        this.router.navigate(['inicio']);
        this.usuarioRegistrado = true;
        

      }

      else if(this.validacionLogin.usuario == null){

        this.usuarioRegistrado = false;
        

      }

      


    })

    //this.router.navigate(['inicio']);
    

  }

  registrarse(){

    this.router.navigate(['registrandose']);

  }

  ngOnInit(): void {
  }

}
