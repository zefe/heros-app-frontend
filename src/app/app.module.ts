import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { WebdatarocksPivotModule } from 'ng-webdatarocks';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    
    AppRoutingModule,
    SharedModule,// Lo unico que importamos es este modulo, el resto es por lazyload
    WebdatarocksPivotModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

