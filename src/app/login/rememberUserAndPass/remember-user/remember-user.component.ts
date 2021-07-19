import { Component, OnInit,Input  } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioCorreoService } from '../../../servicios/servicios-http/usuario.correo.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validator, Validators, FormControl, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-remember-user',
  templateUrl: './remember-user.component.html'
})
export class RememberUserComponent {
  closeResult = '';
  usuarioExistente:any;
  validacionExistente:boolean = false;
  formCorreo: FormGroup;

  constructor(
    private modalService: NgbModal,
    private usuarioCorreoService:UsuarioCorreoService,
    private toastr:ToastrService,
    private fromBuilder: FormBuilder
  ) {

    this.formCorreo = this.fromBuilder.group({

      nombreCorreo:['',[Validators.required]]

    })
    
  }

  open(content:any) {
    this.validacionExistente = false;
    this.modalService.open(content);
    this.formCorreo.controls.nombreCorreo.markAsUntouched();
  }



  enviarNombreDeUsuario(correoUser:string){

    this.usuarioCorreoService.enviarUsuarioPorCorreo( { correo:correoUser} ).subscribe(respuesta =>{

      this.usuarioExistente = respuesta;

      if(this.usuarioExistente.codigo == 1){

        this.formCorreo.reset();
        this.modalService.dismissAll();
        this.toastr.success(`${this.usuarioExistente.mensaje}`);

      }
      else{

        this.validacionExistente = true;
   
      }


    });

  }

  ocultarMensajes(){

    this.validacionExistente = false;

  }
  
}



