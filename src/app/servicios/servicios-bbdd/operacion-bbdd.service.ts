import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperacionBbddService {

  constructor(private httpClient: HttpClient) { 

    
    

  }

  agregarUsuario(datosUsuario:any){

    let json = JSON.stringify(datosUsuario);

    let headers = new HttpHeaders().set('Content-Type','application/json')

    return this.httpClient.post("http://localhost:3000/creandoUsuario", json, {headers : headers});

  }

  consultarUsuario(usuario:any){

    let json = JSON.stringify(usuario);

    let headers = new HttpHeaders().set('Content-Type','application/json')

    return this.httpClient.post("http://localhost:3000/consultarUsuario", json, {headers : headers});

  }

  consultarPorNombreUsuario(nombreUsuario:any){

    let json = JSON.stringify(nombreUsuario);

    let headers = new HttpHeaders().set('Content-Type','application/json')

    return this.httpClient.post("http://localhost:3000/consultaPorNombreDeUsuario", json, {headers : headers});

  }

  loginUsuario(datosPrincipal:any){

    let json = JSON.stringify(datosPrincipal);

    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this.httpClient.post("http://localhost:3000/loguearUsuario", json, {headers : headers});

  }

  actualizarUsuario(nombreUsuario:any){

    let json = JSON.stringify(nombreUsuario);

    let headers = new HttpHeaders().set('Content-Type','application/json')

    return this.httpClient.post("http://localhost:3000/actualizarUsuario", json, {headers : headers});

  }

  eliminarUsuario(usuarioNombre:any){
 
    return this.httpClient.request('delete','http://localhost:3000/eliminarUsuario', {body:{ Usuario: usuarioNombre }});

    
  }

  eliminarUltimoUsuario(){

    return this.httpClient.delete('http://localhost:3000/eliminarUltimoUsuario');

  }

  consultarUltimoUsuario(){

    return this.httpClient.post('http://localhost:3000/consultarUltimoUsuario',null);

  }


}