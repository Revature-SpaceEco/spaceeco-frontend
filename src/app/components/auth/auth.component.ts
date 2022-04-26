import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  username!: string;
  password!: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.authService
      .login(this.username,this.password) 
      .subscribe(
        (response)=>{
          console.log(response);
        }
      );
  }

}
