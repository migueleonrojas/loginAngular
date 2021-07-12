import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent{

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

  

  ngOnInit(){
    this.timeOut = false;
    
    this.startDate();
    

  }

  startDate(){

    
    let anio = Number(new Date().toISOString().substring(0,4));
    let dia =  Number(new Date().toISOString().substring(8,10));
    let mes =  Number(new Date().toISOString().substring(5,7));
    let hora = Number(String(new Date()).substring(16,18));
    let minuto = Number(String(Number(String(new Date()).substring(19,21))));
    let segundos = Number(String(new Date()).substring(22,24));
    
    this.clock = this.source.subscribe(t => {
      this.now = new Date();
      this.end = new Date(`${mes}/${dia-1}/${anio} ${hora}:${minuto+2}:${segundos + 30}`);
      this.showDate();
    });

  }

  showDate(){
    let distance = this.end - this.now;
    this.day = Math.floor(distance / this._day);
    this.hours = Math.floor((distance % this._day) / this._hour);
    
    this.minutes = Math.floor((distance % this._hour) / this._minute);

    this.seconds = Math.floor((distance % this._minute) / this._second);

    

    if(this.seconds == 0 && this.minutes == 0){



      this.timeOut = true;

      this.clock.unsubscribe();

    }
    
  }

  reenviarCodigo(){

    this.timeOut = false;
    this.startDate();

  }
  

}
