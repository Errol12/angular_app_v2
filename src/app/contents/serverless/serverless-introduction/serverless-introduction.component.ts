import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serverless-introduction',
  templateUrl: './serverless-introduction.component.html',
  styleUrls: ['./serverless-introduction.component.css']
})
export class ServerlessIntroductionComponent implements OnInit {

	title = "Serverless Framework";
	fullImagePath: string;

  constructor() {
  	this.fullImagePath = 'assets/serverless-architecture-visual-5.png'
   }

  ngOnInit() {
  }

}
