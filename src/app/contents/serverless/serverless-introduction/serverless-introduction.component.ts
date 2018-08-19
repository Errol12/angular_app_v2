import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';
@Component({
  selector: 'app-serverless-introduction',
  templateUrl: './serverless-introduction.component.html',
  styleUrls: ['./serverless-introduction.component.css']
})
export class ServerlessIntroductionComponent implements OnInit {

	title = "Serverless Framework";
	fullImagePath: string;
  id="hello";

  constructor(private route:ActivatedRoute,private router:Router  ) {
  	this.fullImagePath = 'assets/serverless-architecture-visual-5.png'
   }

  ngOnInit() {
  }

  goToDashboard(){
    

    this.router.navigate(['/dashboard',{name: this.id}]); //Optional params
    //this.router.navigate([this.id],{relativeTo: this.route}); //Relative route -->paas params to current route  
    //this.router.navigate(['../',{id: this.id}],{relativeTo: this.route}); //Relative route --> remove last '/' space from current route and paas variables 
  }



}
