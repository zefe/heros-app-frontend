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
    { field: 'domain', rowGroup: true, enableRowGroup: true },
    { field: 'traffic', aggFunc: 'sum' },
    { field: 'trustFlow', pivot: true, enablePivot: true },
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

 data = [
    {
      domain: 'duckduckgo.com',
      path: '/search',
      traffic: 15000,
      trustFlow: 30
    },
    {
      domain: 'duckduckgo.com',
      path: '/images',
      traffic: 8000,
      trustFlow: 20
    },
    {
      domain: 'google.com',
      path: '/search',
      traffic: 20000,
      trustFlow: 42
    },
    {
      domain: 'google.com',
      path: '/images',
      traffic: 10000,
      trustFlow: 38
    }
  ]
  

  
  constructor( private heroesService:HeroesService ){}

  ngOnInit(): void {
    //this.heroesService.getOlympicWinners()
      //.subscribe(heroes => this.rowData = heroes)
      this.rowData = this.data
  }

  
}
