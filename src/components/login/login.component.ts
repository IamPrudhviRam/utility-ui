import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted= false;
  data={}
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
    });
  }

  get form() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    let formData = new FormData();
    if (this.loginForm.invalid) {
      return;
    }
    this.data = {
      email: this.form.email.value,
      password: this.form.password.value,
    };
    console.log('Data', this.data)
  }

  onLogin() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    this.data = {
      email: this.form.userName.value,
      password: this.form.password.value,
    };
    console.log('Data', this.data)
    this.router.navigate(["/dashboard"]);
    console.log('Logged inn', this.data)
  }

}
