import { Component, OnInit } from '@angular/core';
import { ScoreService } from 'src/app/services/score/score.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit { 
  searchTerm = 'Manzana'; 
  constructor(private scoreService:ScoreService) {}
  terms=['Manzana','Playa','Perro','Casa','Montaña'];
  ngOnInit(): void {}
  finalizeScore(){   
    this.scoreService.finalizeScore();
  }
  restartScore(){ 
    this.scoreService.restartScore();
  }
  refreshScore($event:number) {  
    this.scoreService.addPointsToScore($event);
  }
  setSearchTerm(newTerm:string){
    this.searchTerm=newTerm;
  }
}
