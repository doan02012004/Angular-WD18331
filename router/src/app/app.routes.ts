import { Routes } from '@angular/router';
import { ProductComponent } from './pages/web/product/product.component';
import { AboutComponent } from './pages/web/about/about.component';
import { ProductDetailComponent } from './pages/web/product-detail/product-detail.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AdminProductComponent } from './pages/admin/admin-product/admin-product.component';
import { AdminProductAddComponent } from './pages/admin/admin-product-add/admin-product-add.component';
import { AdminProductsEditComponent } from './pages/admin/admin-products-edit/admin-products-edit.component';
import { LayoutWebComponent } from './pages/web/layout-web/layout-web.component';
import { HomePageComponent } from './pages/web/home-page/home-page.component';
import { LayoutAdminComponent } from './pages/admin/layout-admin/layout-admin.component';

export const routes: Routes = [
 {path:"",component:LayoutWebComponent, children:[
    {path:"", component:HomePageComponent},
    {path:"product", component:ProductComponent},
    {path:"product/:id", component:ProductDetailComponent},
    {path:"about", component:AboutComponent},
 ]},
 {path:"admin",component:LayoutAdminComponent, children:[
  {path:"", redirectTo:"/admin/dashboard" , pathMatch:"full"},
  {path:"dashboard", component:DashboardComponent},
  {path:"product", component:AdminProductComponent},
  {path:"product/add", component:AdminProductAddComponent},
  {path:"product/:id/edit", component:AdminProductsEditComponent},
]}
];
