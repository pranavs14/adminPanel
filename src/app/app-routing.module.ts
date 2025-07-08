import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CustomerComponent } from './components/customer/customer.component';
import { StudentComponent } from './components/student/student.component';
import { UserComponent } from './components/user/user.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'analytics', component: AnalyticsComponent },
      { path: 'customer', component: CustomerComponent },
      { path: 'student', component: StudentComponent },
      { path: 'user', component: UserComponent },
      { path: '', redirectTo: 'analytics', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
