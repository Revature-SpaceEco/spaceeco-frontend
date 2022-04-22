import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{ path: 'register', component: RegisterComponent }];
import { AuthComponent } from './components/auth/auth.component';

const routes: Routes = [{ path: 'login', component: AuthComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
