import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockchainBasicsComponent } from './blockchain-basics.component';

describe('BlockchainBasicsComponent', () => {
  let component: BlockchainBasicsComponent;
  let fixture: ComponentFixture<BlockchainBasicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockchainBasicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockchainBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
