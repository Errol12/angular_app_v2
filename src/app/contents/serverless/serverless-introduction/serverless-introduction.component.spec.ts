import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerlessIntroductionComponent } from './serverless-introduction.component';

describe('ServerlessIntroductionComponent', () => {
  let component: ServerlessIntroductionComponent;
  let fixture: ComponentFixture<ServerlessIntroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerlessIntroductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerlessIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
