import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators, FormControl, AbstractControl } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-desblock-user',
  templateUrl: './desblock-user.component.html',
  styleUrls: ['./desblock-user.component.css']
})
export class DesblockUserComponent implements OnInit {

  formDes:FormGroup;

  tokenEnviado:boolean=false;

  constructor(

    private fromBuilder: FormBuilder,
    private modalService: NgbModal,

  ) { 

    this.formDes = this.fromBuilder.group({

      nombreUsuario:['',[Validators.required]]

    })

  }

  open(content:any) {
    
    this.modalService.open(content);
    this.formDes.controls.nombreCorreo.markAsUntouched();
    this.formDes.reset();
  }

  ngOnInit(): void {
  }

  ocultarMensajes(){


  }


  enviarNombreDeUsuario(){

    this.tokenEnviado=true;

  }

}
