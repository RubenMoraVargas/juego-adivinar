import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  @Input() searchTerm = '';
  @Output() userHasPlayed = new EventEmitter<number>();

  images: string[];
  points: number[];
  isLoadAllImages = false; 
  negativePoints=-1;
  positivePoints=6;
  optionsLenght=4;
  constructor() {}

  ngOnInit(): void {  
    this.loadImages();
  }
  onImagesLoaded(index: number) { 
    setTimeout(() => {
       this.isLoadAllImages=true;
    }, 2000); 
  }
  async loadImages() {
    let urlImagen = `https://source.unsplash.com/640x330/?${this.searchTerm}`; 
    this.images =new Array(this.optionsLenght).fill(urlImagen);
    this.points =new Array(this.optionsLenght).fill(this.negativePoints);
    const random = Math.floor(Math.random() * this.optionsLenght);
    this.points[random] = this.positivePoints; 
  }
  ngOnChanges() {
    this.isLoadAllImages=false;
    this.loadImages();
  }
  userSelectItem(value: number) {
    this.userHasPlayed.emit(this.points[value]);
    this.loadImages();
  }
}
