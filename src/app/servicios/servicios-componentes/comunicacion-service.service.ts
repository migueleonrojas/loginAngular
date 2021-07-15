import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {

  mensaje: string;

  private enviarMensajeSubject = new Subject<string>();

  recibir(){

    return this.enviarMensajeSubject.asObservable();
  }
  
  
 
  enviar(mensaje: any) {
    this.mensaje = mensaje;
    this.enviarMensajeSubject.next(mensaje);
  }

  
 }