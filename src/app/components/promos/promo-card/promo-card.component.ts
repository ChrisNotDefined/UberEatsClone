import { Component, Input, OnInit } from '@angular/core';
import { IPromotion } from 'src/app/interfaces/promo.interface';

@Component({
  selector: 'app-promo-card',
  templateUrl: './promo-card.component.html',
  styleUrls: ['./promo-card.component.scss']
})
export class PromoCardComponent implements OnInit {

  constructor() { }

  @Input() promotion: IPromotion;

  ngOnInit(): void {
    
  }

}
