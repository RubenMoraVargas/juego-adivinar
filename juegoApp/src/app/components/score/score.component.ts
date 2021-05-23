import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ScoreService } from 'src/app/services/score/score.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css'],
})
export class ScoreComponent implements OnInit, OnDestroy {
  puntaje = 0;
  scoreSuscription: Subscription;
  buttonText = 'Finalizar';
  @Output() finalizeScore = new EventEmitter();

  constructor(private scoreService: ScoreService) {}

  ngOnInit(): void {
    this.scoreSuscription = this.scoreService.getScore$().subscribe((score) => {
      this.puntaje = score*1000;
    });
  }
  ngOnDestroy(): void {
    this.scoreSuscription.unsubscribe();
  }
  
  finalize() {

    this.buttonText = 'Finalizado';
    this.finalizeScore.emit();
  }
}
