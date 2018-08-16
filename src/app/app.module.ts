import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { ServerlessIntroductionComponent } from './contents/serverless/serverless-introduction/serverless-introduction.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BigDataBasicsComponent } from './contents/big-data/big-data-basics/big-data-basics.component';
import { BlockchainBasicsComponent } from './contents/blockchain/blockchain-basics/blockchain-basics.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ServerlessIntroductionComponent,
    DashboardComponent,
    BigDataBasicsComponent,
    BlockchainBasicsComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
