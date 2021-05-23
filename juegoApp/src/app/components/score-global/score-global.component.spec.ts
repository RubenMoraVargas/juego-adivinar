import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreGlobalComponent } from './score-global.component';

describe('ScoreGlobalComponent', () => {
  let component: ScoreGlobalComponent;
  let fixture: ComponentFixture<ScoreGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreGlobalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
