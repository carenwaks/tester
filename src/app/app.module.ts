import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import form module
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
// import reactive form module
import { ReactiveFormsModule } from '@angular/forms';
import { TestiveComponent } from './testive/testive.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { DataComponent } from './Components/data/data.component';
import { HttpClientModule} from '@angular/common/http';
import { RformComponent } from './Components/rform/rform.component';
import { RprofileComponent } from './Components/rprofile/rprofile.component';
import { StoreComponent } from './Busn/store/store.component';
import { ProductListComponent } from './Busn/product-list/product-list.component'
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestiveComponent,
    ReactiveComponent,
    DataComponent,
    RformComponent,
    RprofileComponent,
    StoreComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // assign modules
    FormsModule,
    ReactiveFormsModule,
    // for all http protocols
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
