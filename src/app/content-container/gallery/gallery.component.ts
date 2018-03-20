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
      name: 'Континентал',
      location: 'Солнечный берег, Болгария',
      price: '32 812 грн',
      term: '8 дней'
    }, {
      img: 'https://randomuser.me/api/portraits/med/men/53.jpg',
      name: 'Континентал',
      location: 'Солнечный берег, Болгария',
      price: '32 812 грн',
      term: '8 дней'
    }, {
      img: 'https://randomuser.me/api/portraits/med/men/53.jpg',
      name: 'Континентал',
      location: 'Солнечный берег, Болгария',
      price: '32 812 грн',
      term: '8 дней'
    }, {
      img: 'https://randomuser.me/api/portraits/men/53.jpg',
      name: 'Континентал',
      location: 'Солнечный берег, Болгария',
      price: '32 812 грн',
      term: '8 дней'
    }, {
      img: 'https://randomuser.me/api/portraits/men/53.jpg',
      name: 'Континентал',
      location: 'Солнечный берег, Болгария',
      price: '32 812 грн',
      term: '8 дней'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
