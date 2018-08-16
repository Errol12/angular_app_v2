import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigDataBasicsComponent } from './big-data-basics.component';

describe('BigDataBasicsComponent', () => {
  let component: BigDataBasicsComponent;
  let fixture: ComponentFixture<BigDataBasicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigDataBasicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigDataBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
