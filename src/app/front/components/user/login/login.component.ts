import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm !:FormGroup;

  constructor(private formBuilder:FormBuilder,private userService:UserService,private route:Router){}
  ngOnInit(): void {
    this.loginForm =this.formBuilder.group({
   
      email : ['',  [Validators.required]],
      password: ['',  [Validators.required]],

      })
  
  }
  onSubmitForm(){
    this.userService.login(this.loginForm.value).subscribe(
      (response) => {
        console.log("logged in")
        //this.route.navigateByUrl("front/login");
      },
      (error) => {
        console.error('Error authentified:', error);
        
          alert('Error authentified:');

      }
    );
    }
 
}
