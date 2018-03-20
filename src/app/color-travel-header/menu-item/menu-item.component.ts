import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';


@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() dataValue;
  value = 24;

  // element = document.getElementsByClassName('counter') as HTMLCollectionOf<HTMLElement>;


  constructor() {
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   let i = 0;
  //   for (let propName in changes) {
  //     const cng = changes[propName];
  //     this.pushValue(cng.currentValue.top, cng.currentValue.left);
  //   }
  //
  // }

  ngOnInit() {

  }
}


