import { Component, OnInit,Input  } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioCorreoService } from '../../../servicios/servicios-http/usuario.correo.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validator, Validators, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-remember-pass',
  templateUrl: './remember-pass.component.html',
  styleUrls: ['./remember-pass.component.css']
})
export class RememberPassComponent implements OnInit {
  closeResult = '';
  usuarioExistente:any;
  validacionExistente:boolean = false;
  formUsuario: FormGroup;

  constructor(
    private modalService: NgbModal,
    private usuarioCorreoService:UsuarioCorreoService,
    private toastr:ToastrService,
    private fromBuilder: FormBuilder
  ) { 

    this.formUsuario = this.fromBuilder.group({

      nombreUsuario:['',[Validators.required]]

    })

  }

  open(content:any) {
    this.formUsuario.reset();
    this.validacionExistente = false;
    this.modalService.open(content);
    this.formUsuario.controls.nombreUsuario.markAsUntouched();
  }

  enviarClave(usuario:string){

    this.usuarioCorreoService.enviarClavePorCorreo( { usuario:usuario} ).subscribe(respuesta =>{

      this.usuarioExistente = respuesta;

      if(this.usuarioExistente.codigo == 1){

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

  ngOnInit(): void {
  }

}
