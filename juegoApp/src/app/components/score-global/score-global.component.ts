import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ScoreService } from 'src/app/services/score/score.service';

@Component({
  selector: 'app-score-global',
  templateUrl: './score-global.component.html',
  styleUrls: ['./score-global.component.css']
})
export class ScoreGlobalComponent implements OnInit {
  puntaje$: Observable<number>; 

  @Output() restartScore = new EventEmitter();

  constructor(private scoreService: ScoreService) {}

  ngOnInit(): void {
    this.puntaje$ = this.scoreService.getScore$();
  }
   
  restart() {
    this.restartScore.emit();
  }
}
