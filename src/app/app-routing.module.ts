import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RestuarantComponent } from './vendor-registration-inner-page/restuarant/restuarant.component'
import { VendorRegistrationInnerPageComponent } from './vendor-registration-inner-page/vendor-registration-inner-page.component';
import { PackagesComponent } from './vendor-registration-inner-page/packages/packages.component';
import { GroceriesComponent } from './vendor-registration-inner-page/groceries/groceries.component';
import { BookstallComponent } from './vendor-registration-inner-page/book stall/bookstall.component';
import { SucessComponent } from './regestration-successfull/sucess.component';
import { ProductUploadComponent } from './product-upload/product-upload.component';
import { ProductListComponent } from './product-upload/product-list/product-list.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component'
const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
     pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'vendor-registration',
    component: VendorRegistrationInnerPageComponent
  },
  {
    path: 'restaurant',
    component: RestuarantComponent
  },
  {
    path: 'groceries',
    component: GroceriesComponent
  },
  {
    path: 'packages',
    component: PackagesComponent
  },
  {
    path: 'bookstall',
    component: BookstallComponent
  },
  {
    path: 'sucess',
    component: SucessComponent
  },
  {
    path: 'product-upload',
    component: ProductUploadComponent
  },
  {
    path: 'product-list',
    component: ProductListComponent
  },
  {
    path: 'admin-profile',
    component: AdminProfileComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
