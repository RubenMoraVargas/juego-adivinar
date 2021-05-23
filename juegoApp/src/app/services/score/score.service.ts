import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScoreService {
  finalizeScore() { 
    this.score$.complete();
  }
  private score = 0;
  private score$: Subject<number>;
  constructor() {
    this.score$ = new Subject();
  }
  public restartScore() {
    this.score = 0;
    this.score$.next(0);
  }
 public addPointsToScore(newPoints: number) {
    this.score =this.score+ newPoints;
    this.score$.next(this.score);
  }
  public getScore$(): Observable<number> {
    return this.score$.asObservable();
  }
}
