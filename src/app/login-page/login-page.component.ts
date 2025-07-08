import {Component, signal, ChangeDetectionStrategy} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  hide = signal(true);
  loginForm: FormGroup;
  loginError: string | null = null;

  private dummyAccounts = [
    { username: 'user1', password: 'pwduserone@123' },
    { username: 'user2', password: 'pwdusertwo@123' },
  ]

  constructor (private formBuilder: FormBuilder, private router: Router, private common: CommonService) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    const isLoggedIn = !!localStorage.getItem('loggedIn');
    if (isLoggedIn) {
      this.router.navigate(['/dashboard']);
    }
  }

  onSubmit() {
    console.log("submit");
    if (this.loginForm.invalid) {
      return;
    }

    const { username, password } = this.loginForm.value;
    const match = this.dummyAccounts.find(acc => acc.username === username && acc.password === password);

    if (match) {
      this.loginError = null;
      this.loginForm.reset();
      this.common.addDataToLocal();
      localStorage.setItem('loggedIn', 'true');
      this.router.navigate(['/dashboard']);
    } else {
      this.loginError = 'Invalid username or password';
    }
  }
}
