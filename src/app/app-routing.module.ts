import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServerlessIntroductionComponent } from './contents/serverless/serverless-introduction/serverless-introduction.component';
import { BigDataBasicsComponent } from './contents/big-data/big-data-basics/big-data-basics.component';
import { BlockchainBasicsComponent } from './contents/blockchain/blockchain-basics/blockchain-basics.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'serverless_basic', component: ServerlessIntroductionComponent },
  { path: 'serverless_basic/:id', component: ServerlessIntroductionComponent },
  { path: 'big_data_basic', component: BigDataBasicsComponent },
  { path: 'blockchain_basic', component: BlockchainBasicsComponent },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' },
 
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
