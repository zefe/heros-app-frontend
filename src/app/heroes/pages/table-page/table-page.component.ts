import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { HeroesService } from '../../services/heroes.service';
//import 'ag-grid-enterprise';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: [ './table-page.component.scss'

  ]
})
export class TablePageComponent implements OnInit {
 
  public rowData!: any[];

  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    { field: 'country', rowGroup: true, enableRowGroup: true },
    { field: 'athlete' },
    { field: 'sport', pivot: true, enablePivot: true },
    { field: 'year', pivot: true, enablePivot: true },
    { field: 'gold', aggFunc: 'sum' },
    { field: 'silver', aggFunc: 'sum' },
    { field: 'bronze', aggFunc: 'sum' },
  ];


  public defaultColDef: ColDef = {
    maxWidth: 140,
    filter: true,
    resizable: true,
    sortable: true,
  };

  public autoGroupColumnDef: ColDef = {
    minWidth: 180,
  };

  
  constructor( private heroesService:HeroesService ){}

  ngOnInit(): void {
    this.heroesService.getOlympicWinners()
      .subscribe(heroes => this.rowData = heroes)
  }

  
}
