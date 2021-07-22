import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OperacionBbddService } from '../servicios/servicios-bbdd/operacion-bbdd.service';
import { FormGroup, FormBuilder, Validator, Validators, FormControl, AbstractControl } from '@angular/forms';
import { ContieneEspacios } from '../signin/validators/clave-confirm.validator';
import { Output, EventEmitter } from '@angular/core';
import { ComunicacionService } from '../servicios/servicios-componentes/comunicacion-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formularioLogin: FormGroup | any;
  validacionLogin: any;
  usuarioRegistrado:boolean = true;
  usuariobloquedo:boolean = false;
  actualizarUsuario:any;


  constructor(
    private router: Router,
    private operacionBbddService: OperacionBbddService,
    private fromBuilder: FormBuilder,
    private comunicacionService:ComunicacionService,
    private toastr:ToastrService,
  
  ){

    this.formularioLogin = this.fromBuilder.group({

      nombreUsuario: [ '' , [Validators.required, ContieneEspacios, Validators.minLength(6), Validators.maxLength(20) ] ],
      claveUsuario:  [ '' , [Validators.required, Validators.minLength(6), Validators.maxLength(20) , ContieneEspacios] ],
    });
   
   }


  accediendo(formulariologin:any){
    this.usuariobloquedo = false;
    this.usuarioRegistrado = true;

    this.operacionBbddService.actualizarEstatusUsuario({
      usuario: formulariologin.controls.nombreUsuario.value,
      clave: formulariologin.controls.claveUsuario.value
    }).subscribe(respuesta =>{

      this.actualizarUsuario = respuesta;
      
      

      if(this.actualizarUsuario.persona != null){

        if(this.actualizarUsuario.persona.Intentos == 0){

          this.usuarioRegistrado = true;
          this.usuariobloquedo = true;

        }

        else if(this.actualizarUsuario.persona.Intentos > 0){

          

          if(this.actualizarUsuario.persona.Intentos == 1){

            this.toastr.warning('Si ingresa la contraseña de manera errada otra vez se le bloqueara su usuario','Precaucion');

          }

          if(this.actualizarUsuario.estado.codigo == 1){

            localStorage.setItem("usuario", formulariologin.controls.nombreUsuario.value);

            this.router.navigate(['inicio']);

          }

          if(this.actualizarUsuario.estado.codigo == 0){

            this.usuarioRegistrado = false;

          }

          
          
          
        }

        


      }

      else{

          this.usuariobloquedo = false;
        
      

      }

      
      

    });
      

  }

  registrarse(){

    this.router.navigate(['registrandose']);

  }

  ngOnInit(): void {


  }

}
