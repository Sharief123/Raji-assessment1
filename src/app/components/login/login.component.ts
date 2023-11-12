import { Component } from '@angular/core';
import { Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServicesService } from 'src/app/services/api-services.service';
import { SharingService } from 'src/app/services/sharingSerivec.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = this.formBuilder.group({
    userName: ['', Validators.required],
    password: ['', Validators.required]
  });
  showPassword = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiServicesService, private sharingService: SharingService) { }

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onLogin() {
    console.log(this.loginForm.value);
    let payload = {
      "userName": this.loginForm.value.userName,
      "password": this.loginForm.value.password
    }

    this.apiService.getLogin(payload).subscribe((res: any) => {
      if (res) {
        this.sharingService.setuserLoginDetails(res.loginDetails);
        this.router.navigate(['/view-profile']);
      }
    })
  }

  onSignUp() {
    this.router.navigate(['/sign-up']);
  }
}
