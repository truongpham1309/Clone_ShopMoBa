import { Component } from '@angular/core';
import { AuthsService } from '../../../../services/auths.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    constructor(private auths: AuthsService, private router: Router, private toastr: ToastrService){}

    account = {
      email: '',
      password: '',
    }

    validLogin = {
      email: '',
      password: '',
    }

    valid = () => {
      let valid = false;
      if(this.account.email.trim().length === 0) {
        valid = true;
        this.validLogin.email = "Email is required!";
      }

      if(this.account.password.trim().length === 0) {
        valid = true;
        this.validLogin.password = "Password is required!";
      }

      return valid;
    }

    handleSubmit = () => {
      if(this.valid()) return;

      this.auths.login(this.account).subscribe(data => {
        sessionStorage.setItem("token", data.token);
        this.router.navigateByUrl("/");
      }, error => {
        this.toastr.error("Login failed");
      })
    }
}
