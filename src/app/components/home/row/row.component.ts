import { Component, Input, OnInit } from '@angular/core';
import { ICathegory } from './../../../interfaces/cathegory.interface'

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {

  constructor() { }

  @Input() cathegory: ICathegory;

  ngOnInit(): void {
    console.log('My cat: ', this.cathegory);
    
  }

}
