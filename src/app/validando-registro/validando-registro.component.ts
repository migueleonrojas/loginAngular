import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ComunicacionService } from '../servicios/servicios-componentes/comunicacion-service.service';
import { ToastrService } from 'ngx-toastr';
import { UsuarioCorreoService } from '../servicios/servicios-http/usuario.correo.service';
import { OperacionBbddService } from '../servicios/servicios-bbdd/operacion-bbdd.service';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';


@Component({
  selector: 'app-validando-registro',
  templateUrl: './validando-registro.component.html',
  styleUrls: ['./validando-registro.component.css']
})
export class ValidandoRegistroComponent implements OnInit {
  
  @Input() datForm:any;

  
  datosUsuario:any;
  codigoValidacion:string;
  objRespuestaCorreo:any;
  errorCod:boolean=false;
  codigoVencido:boolean= false;
  correoParaReenviar:string;
  validandoUsuario:any;
  
  constructor(
    public router: Router, 
    public comunicacionService: ComunicacionService,
    private toastr:ToastrService,
    private usuarioCorreoService:UsuarioCorreoService,
    private operacionBbddService:OperacionBbddService

  ){ 

    
    
    
  }

  

  datosFormulario:any;

  ngOnInit(): void {

    this.datosUsuario =  this.datForm;
    
    this.enviarCorreoConCodigoDeValidacion(this.datosUsuario.correo.value);

    this.correoParaReenviar = this.datosUsuario.correo.value;
    
  }

  
  

  autenticar(inputCodigoMail:any){

    

    this.operacionBbddService.agregarUsuario({
      Nombre: this.datosUsuario.nombreCompleto.value,
      Usuario: this.datosUsuario.usuarioIndicado.value,
      Correo: this.datosUsuario.correo.value,
      Clave:this.datosUsuario.claveNueva.value,
      FechaDeNacimiento: this.datosUsuario.fechaDeNacimiento.value,
      Registrado: "true",
      Estatus: "activo",
      Saldo: 0,
      Rol: "usuario",
      tVal: new Date().getTime(),
      cod: inputCodigoMail.value,
      Intentos: 3

    }).subscribe(res => {

      console.log(res);

      this.validandoUsuario = res;

      console.log(this.validandoUsuario.mensaje.codigo);

      if(this.validandoUsuario.mensaje !=  null){

        if(this.validandoUsuario.mensaje.codigo == 3){

          this.codigoVencido = true;
          this.errorCod = false;
        }
        else if(this.validandoUsuario.mensaje.codigo == 2){

          this.errorCod = true;
          this.codigoVencido = false;

        }
        else if(this.validandoUsuario.mensaje.codigo == 1){

          this.toastr.success(`El usuario se creo con exito`);
          this.router.navigate(['acceso']);

        }

        

      } 
      
    });



    
    /*if((<HTMLInputElement>inputCodigoMail).value == this.codigoValidacion){

      this.router.navigate(['acceso']);

    }

    else{
      this.errorCod = true;
    }*/
    

  }
  

  enviarCorreoConCodigoDeValidacion(correoUsuario:string){


    this.usuarioCorreoService.enviarCorreo({correo:correoUsuario}).subscribe(resultado =>{

      this.toastr.success(`Se envio un codigo de validacion al siguiente correo: 
      ${correoUsuario}`, 'Correo enviado!');


      this.objRespuestaCorreo = resultado;

      this.codigoValidacion =  this.objRespuestaCorreo.codigoVerificacion;

      
    },
    error =>{

      this.toastr.error('Correo no enviado', 'El correo no se pudo enviar, reenvielo nuevamente');

    }
    
    )

  }

  retroceder(){

    //this.router.navigate(['registro']);

  }


  eliminar(){

    this.operacionBbddService.eliminarUltimoUsuario().subscribe(resultado =>{


    });

  }

  consultar(){

    this.operacionBbddService.consultarUltimoUsuario().subscribe(resultado=>{

      this.datosUsuario = resultado;

      alert(this.datosUsuario.usuario.Usuario);
    })

  }


 



}
