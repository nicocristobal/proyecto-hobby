import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../service/user.Service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  formReg: FormGroup;

  constructor( private userService: UserService){
    this.formReg= new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    const emailControl = this.formReg.get('email');
    const passwordControl = this.formReg.get('password');
  
    if (emailControl && passwordControl) {
      const email = emailControl.value;
      const password = passwordControl.value;
  
      this.userService.register(email, password)
        .then(response => {
          console.log(response);
        })
        .catch(error => console.log(error));
    } else {
      console.error('Los campos de email o password no existen en el formulario.');
    }
  }
  
  

}
