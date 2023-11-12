import { Component } from '@angular/core';
import { Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  SelectGender: string = 'Select Gender';
  genderValues = ['Male', 'Female', 'Others'];

  signupForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    gender: ['', Validators.required],
    userName: ['', Validators.required],
    password: ['', Validators.required],
    studentId: ['', Validators.required],
    studentEmail: ['', Validators.required]
  });
  showPassword = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiServicesService) { }

  get f(): { [key: string]: AbstractControl } {
    return this.signupForm.controls;
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  genderSfn(data: any) {
    this.SelectGender = data;
  }

  onLogin() {
    this.router.navigate(['/login']);
  }

  onSubmit() {
    let payload = {
      "firstName": this.signupForm.value.firstName,
      "lastName": this.signupForm.value.lastName,
      "gender": this.signupForm.value.gender,
      "phoneNumber": this.signupForm.value.phoneNumber,
      "studentId": this.signupForm.value.studentId,
      "studentEmailId": this.signupForm.value.studentEmail,
      "userName": this.signupForm.value.userName,
      "password": this.signupForm.value.password
    }

    this.apiService.getSignUp(payload).subscribe(
      (res: any) => {
        if (res) {
          this.router.navigate(['/login']);
        }
      }, (err: any) => {
        console.log(err);
      })

  }
}
