import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RestServicesService } from '../rest-services.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error: string;
    success: string
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private restService: RestServicesService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    // show success message on registration
    if (this.route.snapshot.queryParams['registered']) {
        this.success = 'Registration successful';
    }
  }
  get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.error = null;
        this.success = null;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        console.log(`!`,this.loginForm.controls);
        const loginData = {
            "email":this.loginForm.controls.email.value,
            "password": this.loginForm.controls.password.value
        }
        this.restService.login(loginData)
          .subscribe(data => {

                    this.router.navigate(["/home"],{ queryParams: {data:data} });
                    this.restService.setStorage('userInfo', JSON.stringify(data,null,4));
                    this.restService.isUserLoggedIn = true;
                },
                error => {
                    this.error = error;
                    this.loading = false;
                });
    }

}
