import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ICathegory } from 'src/app/interfaces/cathegory.interface';
import { CatalogState, LoadCatalogAction } from 'src/app/Models/catalog.redux';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private store:Store) { }

  @Select(CatalogState.getCatalog) catalog$: Observable<ICathegory[]>;

  ngOnInit(): void {
    this.store.dispatch(new LoadCatalogAction())
  }

}
