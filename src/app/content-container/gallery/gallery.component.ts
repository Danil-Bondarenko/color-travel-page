import {Component, OnInit} from '@angular/core';
import {HotelCardComponent} from './hotel-card/hotel-card.component';
import {GetHotelCardDataService} from '../../services/get-hotel-card-data';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  public arr = [
    {
    img: 'https://randomuser.me/api/portraits/med/men/53.jpg',
    name: 'Data'
  }, {
    img: 'https://randomuser.me/api/portraits/med/men/53.jpg',
    name: 'Data'
  },  {
    img: 'https://randomuser.me/api/portraits/med/men/53.jpg',
    name: 'Data'
  },  {
    img: 'https://randomuser.me/api/portraits/men/53.jpg',
    name: 'Data'
  }];

  // constructor: private getHotelCardData: GetHotelCardDataService

  constructor() {
  }

  ngOnInit() {
    // this.get();
  }

  // public get() {
  //   this.arr = this.getHotelCardData.getHotelCardData().subscribe(
  //     data => {
  //       this.arr = data;
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  // }

}
