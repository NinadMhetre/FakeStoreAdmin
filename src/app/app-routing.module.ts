import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'product-setup',
    pathMatch: 'full'
  },
  {
     path: 'product-setup', loadChildren: () => import('./product-setup/product-setup.module').then(m => m.ProductSetupModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
