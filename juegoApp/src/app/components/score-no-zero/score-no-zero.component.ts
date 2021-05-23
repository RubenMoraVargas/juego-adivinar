import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScoreService } from 'src/app/services/score/score.service';

@Component({
  selector: 'app-score-no-zero',
  templateUrl: './score-no-zero.component.html',
  styleUrls: ['./score-no-zero.component.css'],
})
export class ScoreNoZeroComponent implements OnInit {
  puntaje = 0;
  buttonText = 'Desinscribir';
  scoreSuscription: Subscription;
 
  constructor(private scoreService: ScoreService) {}

  ngOnInit(): void {
    this.suscribe();
  }
  ngOnDestroy(): void {
    this.scoreSuscription.unsubscribe();
  }
  unsuscribe(){
    this.buttonText = 'Inscribir';
    this.scoreSuscription.unsubscribe();
    this.scoreSuscription=null;
    
  }

suscribe(){
  this.buttonText = 'Desinscribir';
  this.scoreSuscription = this.scoreService.getScore$().subscribe((score) => {
    if (score > 0) {
      this.puntaje = score * 500;
    } else {
      this.puntaje = 0;
    }
  });
}
  switchSucription() {
    if (this.scoreSuscription) {
     this.unsuscribe()
    } else {
      this.suscribe();
      
    }
  }
}
