import { LoginPageComponent } from './pages/acount/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetsPageComponent } from './pages/acount/pets-page/pets-page.component';
import { ProductsPageComponent } from './pages/store/products-page/products-page.component';
import { FramePageComponent } from './pages/master/frame.page.component';
import { CartPageComponent } from './pages/store/cart-page/cart-page.component';
import { ResetPasswordPageComponent } from './pages/acount/reset-password-page/reset-password-page.component';
import { SignUpPageComponent } from './pages/acount/sign-up-page/sign-up-page.component';

const routes: Routes = [
  {
    path: '',
    component: FramePageComponent,
    children: [
      { path: '', component: ProductsPageComponent },
      { path: 'cart', component: CartPageComponent },
    ]
  },
  {
    path: 'account',
    component: FramePageComponent,
    children: [
      { path: 'produtos', component: ProductsPageComponent },
    ]
  },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignUpPageComponent },
  { path: 'reset-password', component: ResetPasswordPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
