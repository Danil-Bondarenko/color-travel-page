import {Component, OnInit} from '@angular/core';
import {MenuItemComponent} from './menu-item/menu-item.component';

@Component({
  selector: 'app-color-travel-header',
  templateUrl: './color-travel-header.component.html',
  styleUrls: ['./color-travel-header.component.css']
})
export class ColorTravelHeaderComponent implements OnInit {

  hotels = 10522 + ' отелей';
  responses = 745 + ' отзывов';
  items = [
    {
      img: 'assets/images/email.png',
      title: 'Сообщения'
    },
    {
      img: 'assets/images/comparison.png',
      title: 'Сравнения'
    },
    {
      img: 'assets/images/favourite.png',
      title: 'Желания'
    }

  ];

  constructor() {
  }

  ngOnInit() {
  }

}
