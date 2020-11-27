import { Component, Input, OnInit } from '@angular/core';
import { IRestaurant } from 'src/app/interfaces/restaurant.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input() restaurant: IRestaurant;

  ngOnInit(): void {
  }

}
