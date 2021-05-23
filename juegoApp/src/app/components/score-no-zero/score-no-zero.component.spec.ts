import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreNoZeroComponent } from './score-no-zero.component';

describe('ScoreNoZeroComponent', () => {
  let component: ScoreNoZeroComponent;
  let fixture: ComponentFixture<ScoreNoZeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreNoZeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreNoZeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
