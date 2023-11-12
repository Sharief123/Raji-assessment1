import { Component } from '@angular/core';
import { Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  changePasswordForm = this.formBuilder.group({
    userName: ['', Validators.required],
    password: ['', Validators.required],
    newpassword: ['', Validators.required],
  });
  showPassword = false;
  showPassword2 = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private apiservice: ApiServicesService) { }

  get f(): { [key: string]: AbstractControl } {
    return this.changePasswordForm.controls;
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  togglePasswordVisibility2() {
    this.showPassword2 = !this.showPassword2;
  }

  changePassword() {
    console.log(this.changePasswordForm.value);

    let payload = {
      "userName": this.changePasswordForm.value.userName,
      "oldPassword": this.changePasswordForm.value.password,
      "newPassword": this.changePasswordForm.value.newpassword
    }

    this.apiservice.getChangePassword(payload).subscribe((res: any) => {
      if (res) {
        this.router.navigate(['/login']);
      }
    })
  }

}
