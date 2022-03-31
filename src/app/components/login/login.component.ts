import { Component, OnInit } from '@angular/core';
import { environment as env } from 'src/environments/environment';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 
  loginImg= `${env.ASSETS}logo.png`


  constructor() { }
  

  ngOnInit(): void {}

}
