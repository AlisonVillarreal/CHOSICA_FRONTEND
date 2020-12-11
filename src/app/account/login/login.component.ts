import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });
}

get f() { return this.form.controls; }

onSubmit() {
  this.submitted = true;


  // stop here if form is invalid
  if (this.form.invalid) {
      return;
  }

  this.loading = true;
  this.accountService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        {
          next: res => {
              // get return url from query parameters or default to home page
              console.log(res);
              this.accountService.guadarUser(res.access_token);
              this.accountService.guadarToken(res.access_token);
              //const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
              //this.router.navigateByUrl(returnUrl);
              this.router.navigate(['/']); 
          },
          error: error => {
              //this.alertService.error(error);
              console.log(error);
              this.loading = false;
          }
      });
    
    }
}
