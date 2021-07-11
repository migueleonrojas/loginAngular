import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router) {

    
   }


  accediendo(){


    this.router.navigate(['inicio']);
    

  }

  registrarse(){

    this.router.navigate(['registrandose']);

  }

  ngOnInit(): void {
  }

}
