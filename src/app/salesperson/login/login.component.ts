import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Salesperson } from '../sper.class';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  message: string = '';

  constructor(
    private syssvc: SystemService,
    private router: Router
  ) { }

  login(): void {
    this.syssvc.loggedInUser = null;
    if(this.password === "password") {
      console.log("Login successful!");
      let sper = new Salesperson();
      this.syssvc.loggedInUser = sper;
      console.debug(this.syssvc.loggedInUser);
      this.router.navigateByUrl("/cust/list");
    }
    this.message = "Login failed!";
    console.debug(this.syssvc.loggedInUser);
  }

  ngOnInit(): void {
  }

}
