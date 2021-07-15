import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { NavigationEnd, Router  } from '@angular/router';
import { FormGroup, FormBuilder, Validator, Validators, FormControl, AbstractControl } from '@angular/forms';
import { validarQueSeanIguales, fechaMaxima, fechaMinima, fechaActual, ContieneEspacios } from './validators/clave-confirm.validator';
import { ComunicacionService } from '../servicios/servicios-componentes/comunicacion-service.service';
import { OperacionBbddService } from '../servicios/servicios-bbdd/operacion-bbdd.service';
import { ToastrService } from 'ngx-toastr';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {

  formularioDeRegistro: FormGroup | any;
  
  usuarioExistente:any;

  usuarioExiste:boolean=false;

  correoMaxLen = "50";

  dateMax:any =  this.datepipe.transform(new Date(), 'yyyy-MM-dd');
  dateMin:any = String(Number(new Date().toISOString().substring(0,4)) -120 +  new Date().toISOString().substring(4,8) + new Date().toISOString().substring(8,10));;
  dateActual:any =  this.datepipe.transform(new Date(), 'yyyy-MM-dd');
  
  siteKey:string;

  @Output() formValido = new EventEmitter<boolean>();

  @Output() formulario = new EventEmitter();



  constructor(
    public datepipe: DatePipe, 
    public router: Router,
    private fromBuilder: FormBuilder,
    private servicioComunicacion: ComunicacionService,
    private operacionBbddService: OperacionBbddService,
    private toastr:ToastrService) { 

      this.siteKey = '6LfbB00bAAAAAIUSR-gwFJkD635HtpZL9tiiFW6Z';
      

      this.formularioDeRegistro = this.fromBuilder.group({
        
        nombreCompleto: ['', [Validators.required, Validators.pattern("[a-zA-Z ]*"), Validators.minLength(3), Validators.maxLength(40) ] ],
        usuarioIndicado: [ '', [Validators.required, ContieneEspacios, Validators.minLength(6), Validators.maxLength(20), Validators.pattern("[a-zA-Z.@_-]*")] ],
        correo: [ '', [Validators.required, Validators.pattern("^[^@]+@[^@]+\.[a-zA-Z]{2,}$"), Validators.maxLength(50)] ],
        claveNueva: [ '', [Validators.required,Validators.minLength(6), Validators.maxLength(20) , ContieneEspacios, Validators.pattern("(?=.*[0-9])(?=.*[.|@|_|-])(?=.*[A-Z])([0-9a-zA-Z.@_-])*") ] ],
        claveVerificar: [ '', [Validators.required, ContieneEspacios] ],
        fechaDeNacimiento: [ '', Validators.required ],
        recaptcha: ['', Validators.required]
      },
      {

        validators: [validarQueSeanIguales, fechaMaxima, fechaMinima, fechaActual] 
        

      }
      );
      
    }


  ngOnInit(): void {
    
    

  }

  mostrarClave( input:any, span:any ){


    if((<HTMLInputElement>input).type == "password" && (<HTMLInputElement>span).innerHTML == "visibility_off"){

      (<HTMLInputElement>input).type = "text";
      (<HTMLInputElement>span).innerHTML = "visibility";
    }

    else{
      (<HTMLInputElement>input).type = "password";
      (<HTMLInputElement>span).innerHTML = "visibility_off";
    }

  }

  onSubmit(parametro:any){

    
    

  }

  
  registrandose(parametro:any){

    

    if(parametro.status != "INVALID"){

      
      
      
      let datosFormulario = {
        Nombre: parametro.controls.nombreCompleto.value,
        Usuario: parametro.controls.usuarioIndicado.value,
        Correo: parametro.controls.correo.value,
        Clave: parametro.controls.claveNueva.value,
        ClaveVerificar: parametro.controls.claveVerificar.value,
        FechaDeNacimiento: parametro.controls.fechaDeNacimiento.value,
        Registrado: false,
        Estatus: 'inactivo',
        Saldo: 0,
        Rol:'usuario'
      
      } 
      

      this.operacionBbddService.consultarUsuario(
        {
          Usuario: parametro.controls.usuarioIndicado.value, 
          Correo: parametro.controls.correo.value
        }
      ).subscribe(resultado =>{

        this.usuarioExistente = resultado;

        console.log(this.usuarioExistente);

        if(this.usuarioExistente.usuario == null){
          this.formValido.emit(true);
          this.formulario.emit(parametro.controls);
        }

        else{

          this.usuarioExiste = true;

        }

      })
          
      
      

      
    }
    

  }

  cancelar(){

    this.router.navigate(['acceso']);

  }


  


}
