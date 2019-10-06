import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleSet } from 'src/Common/material-module';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { SelectedProductComponent } from './selected-product/selected-product.component';

import { DisplayListComponent } from './display-list/display-list.component';
const routes: Routes = [
  { path: '', component: DisplayListComponent },
  {path :'selected' ,component :SelectedProductComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SelectedProductComponent,

    DisplayListComponent
  ],
  imports: [
    BrowserModule,
    MaterialModuleSet,
    BrowserAnimationsModule,
   [RouterModule.forRoot(routes)],
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
