import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';

import {MatIconModule} from '@angular/material/icon';

import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { SigninComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ValidandoRegistroComponent } from './validando-registro/validando-registro.component';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgxCaptchaModule } from 'ngx-captcha';
import { ProcesoRegistroComponent } from './proceso-registro/proceso-registro.component';
import { TimerComponent } from './timer/timer.component';
import { ColocarCeroPipe } from './timer/pipesTimer/colocar-cero.pipe';
import { LoginGuardGuard } from './seguridad/login-guard.guard';
import { RememberPassComponent } from './login/rememberUserAndPass/remember-pass/remember-pass.component';
import { RememberUserComponent } from './login/rememberUserAndPass/remember-user/remember-user.component';


const routes: Routes = [
  
  { path: '', component: AppComponent },
  { path: 'acceso', component: LoginComponent },
  { path: 'inicio', component: InicioComponent, canActivate: [LoginGuardGuard]},
  { path: 'registrandose', component: ProcesoRegistroComponent},
  { path: '**', component: LoginComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    FooterBarComponent,
    InicioComponent,
    SigninComponent,
    ValidandoRegistroComponent,
    ProcesoRegistroComponent,
    TimerComponent,
    ColocarCeroPipe,
    RememberPassComponent,
    RememberUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    NgxCaptchaModule,
    CommonModule
    
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
