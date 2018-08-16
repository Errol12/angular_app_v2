import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { ServerlessIntroductionComponent } from './contents/serverless/serverless-introduction/serverless-introduction.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ServerlessIntroductionComponent,
    DashboardComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
