import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators, FormControl, AbstractControl } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { OperacionBbddService } from '../../../servicios/servicios-bbdd/operacion-bbdd.service';



@Component({
  selector: 'app-desblock-user',
  templateUrl: './desblock-user.component.html',
  styleUrls: ['./desblock-user.component.css']
})
export class DesblockUserComponent implements OnInit {

  mensajeError:boolean= false;
  mensaje:string = '';

  formDes:FormGroup;

  tokenEnviado:boolean=false;

  desbloqueo:any;

  constructor(

    private fromBuilder: FormBuilder,
    private modalService: NgbModal,
    private operacionBbddService:OperacionBbddService,
    private toast:ToastrService

  ) { 

    this.formDes = this.fromBuilder.group({

      nombreUsuario:['',[Validators.required]]

    })

  }

  open(content:any) {
    
    this.modalService.open(content);
    this.formDes.controls.nombreUsuario.markAsUntouched();
    this.formDes.reset();
    this.mensajeError = false;
    this.mensaje = ``;
  }

  ngOnInit(): void {
  }

  ocultarMensajes(){


  }


  enviarNombreDeUsuario(){

    
    if(this.formDes.controls.nombreUsuario.status == 'VALID'){
      this.mensajeError = false;
      this.mensaje = "";
      
      this.operacionBbddService.
      enviarTokenParaDesbloquear({
        usuario: this.formDes.controls.nombreUsuario.value,
        fecha: new Date().getTime()
      })
      .subscribe(res =>{

    
        this.desbloqueo = res;
      
        if(this.desbloqueo.codigo == 0){

          this.mensajeError = true;
          this.mensaje = `El usuario no se encuentra registrado`;

        }

        else if(this.desbloqueo.codigo == -1){

          this.mensajeError = true;
          this.mensaje = `El usuario no se encuentra bloqueado`;

        }

        else if(this.desbloqueo.codigo == 1) {

          this.toast.success(``,`Token enviando al correo ${this.desbloqueo.correo}`)

        }
        else if(this.desbloqueo.codigo == 2){

          this.mensajeError = true;
          this.mensaje = `Debe esperar un tiempo para volver a enviar el token`;

        }

    }); 
      

    }

    else{

      this.mensajeError = true;
      this.mensaje = `El campo no debe de estar vacio`;

    }

  
    /* this.operacionBbddService.
    enviarTokenParaDesbloquear({usuario: this.formDes.controls.nombreUsuario.value})
    .subscribe(res =>{

      console.log(res);

    }); */

  }

}
