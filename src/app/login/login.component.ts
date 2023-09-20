import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.Service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.formLogin.valid) {
      const email = this.formLogin.get('email')?.value;
      const password = this.formLogin.get('password')?.value;

      if (email && password) {
        this.userService.login(email, password)
          .then(response => {
            console.log(response);
            // Redirigir al usuario a otra página aquí después de un inicio de sesión exitoso
            this.router.navigate(['/ruta-deseada']);
          })
          .catch(error => console.log(error));
      }
    }
  }
}
