import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameReviewsComponent } from './game-reviews.component';

describe('GameReviewsComponent', () => {
  let component: GameReviewsComponent;
  let fixture: ComponentFixture<GameReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameReviewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
