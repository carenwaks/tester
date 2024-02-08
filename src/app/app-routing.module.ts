import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './Components/data/data.component';
import { RformComponent } from './Components/rform/rform.component';
import { RprofileComponent } from './Components/rprofile/rprofile.component';
import { StoreComponent } from './Busn/store/store.component';
import { ProductListComponent } from './Busn/product-list/product-list.component';

const routes: Routes = [
  {path:'',component:DataComponent},
  {path:'rform',component:RformComponent},
  {path: 'rprofile', component:RprofileComponent},
  {path: 'store',component:StoreComponent},
  {path: 'product-list', component: ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
