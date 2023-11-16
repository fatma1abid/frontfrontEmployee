import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ValidatorFn,AbstractControl  } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
registerForm !:FormGroup;
passwordRegex:RegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;;
emailRegex:RegExp=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
constructor(private formBuilder :FormBuilder,private userService:UserService,private route:Router){

}
    ngOnInit(): void {
      this.registerForm =this.formBuilder.group({
        nomEt: ['', Validators.required],
        prenomEt: ['', Validators.required],
        email : ['',  [Validators.required, Validators.pattern(this.emailRegex)]],
        password: ['',  [Validators.required, Validators.pattern(this.passwordRegex)]],
        confirmPassword:['', Validators.required],
        acceptTerms:[false, [Validators.requiredTrue]],

        },
        {
          validators: [this.match('password', 'confirmPassword')]
        });
     }
     get myControls(){
      return this.registerForm.controls;
   }
   match(controlName: string, checkControlName: string): ValidatorFn {
    return (controls: AbstractControl) => {
      const control = controls.get(controlName);
      const checkControl = controls.get(checkControlName);
      if (checkControl?.errors && !checkControl.errors['matching']) {
        return null;
      }
      if (control?.value !== checkControl?.value) {
        controls.get(checkControlName)?.setErrors({ matching: true });
        return { matching: true };
      } else {
        return null;
      }
    };
  }
  onSubmitForm(){
    this.userService.register(this.registerForm.value).subscribe(
      (response) => {
        this.route.navigateByUrl("front/login");
      },
      (error) => {
        console.error('Error adding user:', error);
        if (error.status === 400) {
          console.error('Email already exists:', error.error);
          alert('L\'adresse e-mail existe déjà.');

        } else {
          // Handle other errors
        }
      }
    );
  }
}



