import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestServicesService } from '../rest-services.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  submitted = false;
  loading = false;
  error: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private restservices: RestServicesService
  ) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', Validators.required],
      username: ['', Validators.required],
      age: ["", [ Validators.required]]
    });
  }

  get f() { return this.signUpForm.controls; }

  onSubmit()
  {
    this.submitted = true;
    if (this.signUpForm.invalid) {
      return;
    }
    this.loading = true;
    console.log();

    if(this.signUpForm.value)
    {
      const userInfo = {
        email: this.signUpForm.value.email,
        password: this.signUpForm.value.password,
        profile: {
          mobile: this.signUpForm.value.mobile,
          name: this.signUpForm.value.username,
          age: this.signUpForm.value.age
        }
      }
      this.restservices.signUp(userInfo).subscribe(data=>{
        this.router.navigate(['/login'], { queryParams: { registered: true }});
      },
      error => {
          this.error = error;
          this.loading = false;
        }
      );
      console.log(userInfo )
    }
  }

}
