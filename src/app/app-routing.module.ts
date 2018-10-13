import { Routes, RouterModule, PreloadingStrategy, NoPreloading } from '@angular/router';
import { NgModule } from '@angular/core';
const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users',  loadChildren: './user/user.module#UserModule'},
  { path: 'categories', loadChildren: './category/category.module#CategoryModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading }) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
