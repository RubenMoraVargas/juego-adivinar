import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges
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
    this.images = [urlImagen, urlImagen, urlImagen, urlImagen];
    this.points = [-1, -1, -1, -1];

    const random = Math.floor(Math.random() * 4);
    this.points[random] = 4;

    // TODO:eliminar esta linea luego de probar
    this.images[random] = 'https://source.unsplash.com/640x330/?random';
  }
  ngOnChanges(changes: SimpleChanges) {
    this.isLoadAllImages=false;
    this.loadImages();
  }
  userSelectItem(value: number) {
    this.userHasPlayed.emit(this.points[value]);
    this.loadImages();
  }
}
