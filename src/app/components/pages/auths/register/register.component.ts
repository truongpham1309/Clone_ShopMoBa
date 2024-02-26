import { Component } from '@angular/core';
import { AuthsService } from '../../../../services/auths.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private auths: AuthsService, private router: Router, private toastr: ToastrService) { }

  account = {
    username: '',
    email: '',
    password: '',
  }

  validLogin = {
    username: '',
    email: '',
    password: '',
  }

  valid = () => {
    let valid = false;
    if (this.account.email.trim().length === 0) {
      valid = true;
      this.validLogin.email = "Email is required!";
    }

    if (this.account.username.trim().length === 0) {
      valid = true;
      this.validLogin.username = "Username is required!";
    }

    if (this.account.password.trim().length === 0) {
      valid = true;
      this.validLogin.password = "Password is required!";
    }

    return valid;
  }

  handleSubmit = () => {
    if (this.valid()) return;

    this.auths.register(this.account).subscribe(() => {
      this.toastr.success("dang ki thanh cong!");
      this.router.navigateByUrl("/login");
    })
  }
}
