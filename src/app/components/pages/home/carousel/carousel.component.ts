import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  imageAssetFolderPath: string = '../../../../../assets/images/'

  images: string[] = [
    "https://dummyimage.com/600x200/000/fff&text=Slide1",
    "https://dummyimage.com/600x200/000/fff&text=Slide2",
    "https://dummyimage.com/600x200/000/fff&text=Slide3"
    // `${this.imageAssetFolderPath}1 View 1.jpg`,
    // `${this.imageAssetFolderPath}1 View 2.jpg`,
  ];

  constructor(private config: NgbCarouselConfig) { }

  ngOnInit() {
    this.config.showNavigationArrows = true;
    this.config.showNavigationIndicators = true;
  }

}
