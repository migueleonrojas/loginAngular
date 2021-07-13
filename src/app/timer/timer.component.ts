import { Component, OnInit, Input } from '@angular/core';
import { timer } from 'rxjs';
import { UsuarioCorreoService } from '../servicios/servicios-http/usuario.correo.service';
import { OperacionBbddService } from '../servicios/servicios-bbdd/operacion-bbdd.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent{

  @Input() correoReenvio:string;

  timeOut:boolean;

  _second = 1000;
  _minute = this._second * 60;
  _hour = this._minute * 60;
  _day = this._hour * 24;
  end: any;
  now: any;
  day: any;
  hours: any;
  minutes: any;
  seconds: any;
  source = timer(0, 1000);
  clock: any;
  
  segundos:number=30;
  intervalo:any;
  
  constructor(

    private usuarioCorreoService:UsuarioCorreoService,
    private operacionBbddService:OperacionBbddService,
    private toastr:ToastrService

  ){


  }

  

  ngOnInit(){
    this.timeOut = false;

    this.clock = this.source.subscribe(t => {

      this.startDate();

    });

    
    
    
  }

  startDate(){

      
  
      this.now = new Date();

      

      this.end = new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate(),
        new Date().getHours(),
        new Date().getMinutes(),
        new Date().getSeconds() + this.segundos,
        new Date().getMilliseconds()
    );
    
    
    this.showDate();
   

  }

  showDate(){
    let distance = this.end - this.now;

    this.day = Math.floor(distance / this._day);

    this.hours = Math.floor((distance % this._day) / this._hour);
    
    this.minutes = Math.floor((distance % this._hour) / this._minute);

    this.seconds = Math.floor((distance % this._minute) / this._second);

    if(this.seconds > 0 ){this.segundos--;}

    if(this.seconds == 0){

      this.timeOut = true;
      this.clock.unsubscribe();
      this.segundos = 30;

    }
    
  }

  reenviarCodigo(){



    this.timeOut = false;
    this.clock = this.source.subscribe(t => {

      this.startDate();

    });

    
    this.reenviarCorreo(this.correoReenvio);
    


  }


  reenviarCorreo(correo:string){

    this.usuarioCorreoService.enviarCorreo({correo:correo}).subscribe(resultado =>{

      this.toastr.success(`Se envio un codigo de validacion al siguiente correo: 
      ${correo}`, 'Correo enviado!');

      
    },
    error =>{

      this.toastr.error('Correo no enviado', 'El correo no se pudo enviar, reenvielo nuevamente');

    }
    
    )

  }
  

}
