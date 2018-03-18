import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent, DetailComponent } from '@app/pages';
import { DogService } from '@app/services';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule.withServerTransition( { appId: 'yudisthira'} ),
    BrowserTransferStateModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    DogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
