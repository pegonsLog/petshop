import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetsPageComponent } from './pages/acount/pets-page/pets-page.component';
import { ProductsPageComponent } from './pages/store/products-page/products-page.component';

const routes: Routes = [
  {
    path: 'produtos', component: ProductsPageComponent
  },
  {
    path: 'pets', component: PetsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
