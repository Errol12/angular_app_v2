import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServerlessIntroductionComponent } from './contents/serverless/serverless-introduction/serverless-introduction.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'serverless_basic', component: ServerlessIntroductionComponent }
 
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
