import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { E404Component } from './misc/e404/e404.component';
import { MenuComponent } from './menu/menu/menu.component';
import { SperListComponent } from './salesperson/sper-list/sper-list.component';
import { SperDetailComponent } from './salesperson/sper-detail/sper-detail.component';
import { SperCreateComponent } from './salesperson/sper-create/sper-create.component';
import { SperEditComponent } from './salesperson/sper-edit/sper-edit.component';
import { SortPipe } from './misc/sort.pipe';
import { SearchCustomerPipe } from './customer/search-customer.pipe';
import { SearchSalespersonPipe } from './salesperson/search-salesperson.pipe';
import { MenuitemComponent } from './menu/menuitem/menuitem.component';
import { LoginComponent } from './salesperson/login/login.component';
import { OrderCreateComponent } from './order/order-create/order-create.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    E404Component,
    MenuComponent,
    SperListComponent,
    SperDetailComponent,
    SperCreateComponent,
    SperEditComponent,
    SortPipe,
    SearchCustomerPipe,
    SearchSalespersonPipe,
    MenuitemComponent,
    LoginComponent,
    OrderCreateComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
