import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioCorreoService {

  constructor(private httpClient: HttpClient) { 

    
    

  }

  enviarCorreo(datosCorreo:any){

    let json = JSON.stringify(datosCorreo);

    let headers = new HttpHeaders().set('Content-Type','application/json')

    return this.httpClient.post("http://localhost:3000/enviarMail", json, {headers : headers});

  }

  enviarUsuarioPorCorreo(correo:any){

    let json = JSON.stringify(correo);

    let headers = new HttpHeaders().set('Content-Type','application/json')

    return this.httpClient.post("http://localhost:3000/enviarUsuarioPorCorreo", json, {headers : headers});

  }

  enviarClavePorCorreo(usuario:any){

    let json = JSON.stringify(usuario);

    let headers = new HttpHeaders().set('Content-Type','application/json')

    return this.httpClient.post("http://localhost:3000/enviarPassPorCorreo", json, {headers : headers});

  }


}