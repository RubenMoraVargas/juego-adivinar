import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainComponent } from './components/main/main.component';
import { ScoreComponent } from './components/score/score.component';
import { ScoreService } from './services/score/score.service';
import { StorageService } from './services/storage/storage.service';
import { ScoreGlobalComponent } from './components/score-global/score-global.component';
import { ScoreNoZeroComponent } from './components/score-no-zero/score-no-zero.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ScoreComponent,
    MainComponent,
    ScoreGlobalComponent,
    ScoreNoZeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [StorageService,ScoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
