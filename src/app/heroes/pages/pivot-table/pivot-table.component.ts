import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HeroesService } from '../../services/heroes.service';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}



@Component({
  selector: 'app-pivot-table',
  templateUrl: './pivot-table.component.html',
  styleUrls: ['./pivot-table.component.css']
})
export class PivotTableComponent implements OnInit {

  public showTable = true;

  public data: any[] = []
  public filtered: any[] = []


  public metrics = [
    { value: "HeadCount", label: "Head Count" },
    { value: "GrossMargin", label: "Gross Margin" },
    { value: "Revenue", label: "Revenue" },

  ];

  // Rows
  public rowList: any [] = [
    { value: 'FullName', label: 'Full Name'},
    { value: 'ServiceLine', label: 'Service Line'},
    { value: 'EmployeeRegion', label: 'Employee Region'},
    { value: 'EmployeeStatus', label: 'Employee Status'},
    { value: 'CoE', label: 'CoE'},
  ];
  public filteredRows: any[] = [];

  // Columns
  public columnList: any [] = [
    { value: 'FullName', label: 'Full Name'},
    { value: 'ServiceLine', label: 'Service Line'},
    { value: 'EmployeeRegion', label: 'Employee Region'},
    { value: 'BusinessUnit', label: 'Business Unit'},
  ];
  public filteredColumns: any[] = [];


  public myForm: FormGroup = this.fb.group({
    metric: ['', Validators.required],
    //selectedRows: new FormControl<object | null>(null),
    selectedRows: ['', Validators.required],
    selectedColumns: ['', Validators.required]
  });

  public formPage: FormGroup = this.fb.group({
    page: ['1']
  })

  filterRow(event: AutoCompleteCompleteEvent) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < (this.rowList as any[]).length; i++) {
        let row = (this.rowList as any[])[i];
        if (row.label.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(row);
        }
    }
    this.filteredRows = filtered;
  }

  onSelectRow(event: any): void {
    console.log('onSelectRow', event)
  }

  onRemoveRow(event: any): void {
    console.log('removeItem')
    console.log(event)
  }

  // Columns
  filterColumn(event: AutoCompleteCompleteEvent) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < (this.columnList as any[]).length; i++) {
        let column = (this.columnList as any[])[i];
        if (column.label.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(column);
        }
    }
    this.filteredColumns = filtered;
  }

  onSelectColumn(event: any): void {
    console.log('onSelectRow', event)
  }

  onRemoveColumn(event: any): void {
    console.log('removeItem')
    console.log(event)
  }

  // Search
  public search: string = '';

  ngOnInit() {
    this.onMetricChanged();
    this.data = this.heroService.getData();

    this.onPageChanged();
    
  }

  onMetricChanged(): void {
    this.myForm.get('metric')!.valueChanges.subscribe( metric => {
    });
  }

  // SUBMIT FORM
  onSubmit(): void {

    console.info(this.myForm.value);

    const formValues = this.myForm.value;

    let tmpSelectedRows = formValues.selectedRows;
    let tmpSelectedColumns = formValues.selectedColumns;
    let arrRow: any[] = [];
    let arrCol: any[] = [];

    tmpSelectedRows.map( (row: any) => arrRow.push(row.value));
    tmpSelectedColumns.map( (column: any) => arrCol.push(column.value));
    let rows = arrRow.join();
    let columns = arrCol.join();

    let newParameters = {
      metric: formValues.metric,
      indexes: rows,
      columns: columns,
      values: null,
      aggregation: 'count'


    }

    console.log('newParameters', newParameters)

  }

 
  // CREATE TABLE
  public  response = {
    rowspan: [

    ],
    colspan: [{

      'Todos los empleados': 6 
    }

    ],
    columns: [
      {
        col0: "Id",
        col1: "First Name",
        col2: "Last Name",
        col3: "Email",
        col4: "Gender",
        col5: "Ip",
      }
    ],
    data: [
      {
        FullName: "Zefe",
        employeestatus: "Active",
        col01: "0",
        col1: "0",
        col2: "0",
        col3: "0",
        col4: "0",
        col5: "0",
        col6: "0",
        col7: "0",
        col8: "0",
        col9: "1",
        col10: "0",
        col11: "0",
        col12: "0",
        col13: "0",
        col14: "0",
        col15: "0",
        col16: "0",
        col17: "0",
        col18: "0",
        col19: "0",
        col20: "0",
        col21: "0",
        col22: "0",
      },
      {
        FullName: "Andres Sananes",
        employeestatus: "Active",
        col0: "0",
        col1: "0",
        col2: "0",
        col3: "0",
        col4: "0",
        col5: "0",
        col6: "0",
        col7: "0",
        col8: "0",
        col9: "1",
        col10: "0",
        col11: "0",
        col12: "0",
        col13: "0",
        col14: "0",
        col15: "0",
        col16: "0",
        col17: "0",
        col18: "0",
        col19: "0",
        col20: "0",
        col21: "0",
        col22: "0",
      },
      {
        FullName: "Florens",
        employeestatus: "Active",
        col0: "0",
        col1: "0",
        col2: "0",
        col3: "0",
        col4: "0",
        col5: "0",
        col6: "0",
        col7: "0",
        col8: "0",
        col9: "1",
        col10: "0",
        col11: "0",
        col12: "0",
        col13: "0",
        col14: "0",
        col15: "0",
        col16: "0",
        col17: "0",
        col18: "0",
        col19: "0",
        col20: "0",
        col21: "0",
        col22: "0",
      },
      {
        FullName: "Andres Sananes",
        employeestatus: "Active",
        col0: "0",
        col1: "0",
        col2: "0",
        col3: "0",
        col4: "0",
        col5: "0",
        col6: "0",
        col7: "0",
        col8: "0",
        col9: "1",
        col10: "0",
        col11: "0",
        col12: "0",
        col13: "0",
        col14: "0",
        col15: "0",
        col16: "0",
        col17: "0",
        col18: "0",
        col19: "0",
        col20: "0",
        col21: "0",
        col22: "0",
      },
      {
        FullName: "Mexco",
        employeestatus: "Active",
        col0: "0",
        col1: "0",
        col2: "0",
        col3: "0",
        col4: "0",
        col5: "0",
        col6: "0",
        col7: "0",
        col8: "0",
        col9: "1",
        col10: "0",
        col11: "0",
        col12: "0",
        col13: "0",
        col14: "0",
        col15: "0",
        col16: "0",
        col17: "0",
        col18: "0",
        col19: "0",
        col20: "0",
        col21: "0",
        col22: "0",
      },
      {
        FullName: "Mexco",
        employeestatus: "Active",
        col0: "0",
        col1: "0",
        col2: "0",
        col3: "0",
        col4: "0",
        col5: "0",
        col6: "0",
        col7: "0",
        col8: "0",
        col9: "1",
        col10: "0",
        col11: "0",
        col12: "0",
        col13: "0",
        col14: "0",
        col15: "0",
        col16: "0",
        col17: "0",
        col18: "0",
        col19: "0",
        col20: "0",
        col21: "0",
        col22: "0",
      },
      {
        FullName: "Mexco",
        employeestatus: "Active",
        col0: "0",
        col1: "0",
        col2: "0",
        col3: "0",
        col4: "0",
        col5: "0",
        col6: "0",
        col7: "0",
        col8: "0",
        col9: "1",
        col10: "0",
        col11: "0",
        col12: "0",
        col13: "0",
        col14: "0",
        col15: "0",
        col16: "0",
        col17: "0",
        col18: "0",
        col19: "0",
        col20: "0",
        col21: "0",
        col22: "0",
      },
      {
        FullName: "Mexco",
        employeestatus: "Active",
        col0: "0",
        col1: "0",
        col2: "0",
        col3: "0",
        col4: "0",
        col5: "0",
        col6: "0",
        col7: "0",
        col8: "0",
        col9: "1",
        col10: "0",
        col11: "0",
        col12: "0",
        col13: "0",
        col14: "0",
        col15: "0",
        col16: "0",
        col17: "0",
        col18: "0",
        col19: "0",
        col20: "0",
        col21: "0",
        col22: "0",
      },
      {
        FullName: "Mexco",
        employeestatus: "Active",
        col0: "0",
        col1: "0",
        col2: "0",
        col3: "0",
        col4: "0",
        col5: "0",
        col6: "0",
        col7: "0",
        col8: "0",
        col9: "1",
        col10: "0",
        col11: "0",
        col12: "0",
        col13: "0",
        col14: "0",
        col15: "0",
        col16: "0",
        col17: "0",
        col18: "0",
        col19: "0",
        col20: "0",
        col21: "0",
        col22: "0",
      },
      {
        FullName: "Mexco",
        employeestatus: "Active",
        col0: "0",
        col1: "0",
        col2: "0",
        col3: "0",
        col4: "0",
        col5: "0",
        col6: "0",
        col7: "0",
        col8: "0",
        col9: "1",
        col10: "0",
        col11: "0",
        col12: "0",
        col13: "0",
        col14: "0",
        col15: "0",
        col16: "0",
        col17: "0",
        col18: "0",
        col19: "0",
        col20: "0",
        col21: "0",
        col22: "0",
      },
      {
        FullName: "Mexco",
        employeestatus: "Active",
        col0: "0",
        col1: "0",
        col2: "0",
        col3: "0",
        col4: "0",
        col5: "0",
        col6: "0",
        col7: "0",
        col8: "0",
        col9: "1",
        col10: "0",
        col11: "0",
        col12: "0",
        col13: "0",
        col14: "0",
        col15: "0",
        col16: "0",
        col17: "0",
        col18: "0",
        col19: "0",
        col20: "0",
        col21: "0",
        col22: "0",
      },
      {
        FullName: "Mexco",
        employeestatus: "Active",
        col0: "0",
        col1: "0",
        col2: "0",
        col3: "0",
        col4: "0",
        col5: "0",
        col6: "0",
        col7: "0",
        col8: "0",
        col9: "1",
        col10: "0",
        col11: "0",
        col12: "0",
        col13: "0",
        col14: "0",
        col15: "0",
        col16: "0",
        col17: "0",
        col18: "0",
        col19: "0",
        col20: "0",
        col21: "0",
        col22: "0",
      },
      {
        FullName: "Mexco",
        employeestatus: "Active",
        col0: "0",
        col1: "0",
        col2: "0",
        col3: "0",
        col4: "0",
        col5: "0",
        col6: "0",
        col7: "0",
        col8: "0",
        col9: "1",
        col10: "0",
        col11: "0",
        col12: "0",
        col13: "0",
        col14: "0",
        col15: "0",
        col16: "0",
        col17: "0",
        col18: "0",
        col19: "0",
        col20: "0",
        col21: "0",
        col22: "0",
      },
      {
        FullName: "Mexco",
        employeestatus: "Active",
        col0: "0",
        col1: "0",
        col2: "0",
        col3: "0",
        col4: "0",
        col5: "0",
        col6: "0",
        col7: "0",
        col8: "0",
        col9: "1",
        col10: "0",
        col11: "0",
        col12: "0",
        col13: "0",
        col14: "0",
        col15: "0",
        col16: "0",
        col17: "0",
        col18: "0",
        col19: "0",
        col20: "0",
        col21: "0",
        col22: "0",
      },
      {
        FullName: "Mexco",
        employeestatus: "Active",
        col0: "0",
        col1: "0",
        col2: "0",
        col3: "0",
        col4: "0",
        col5: "0",
        col6: "0",
        col7: "0",
        col8: "0",
        col9: "1",
        col10: "0",
        col11: "0",
        col12: "0",
        col13: "0",
        col14: "0",
        col15: "0",
        col16: "0",
        col17: "0",
        col18: "0",
        col19: "0",
        col20: "0",
        col21: "0",
        col22: "0",
      },
      {
        FullName: "Mexco",
        employeestatus: "Active",
        col0: "0",
        col1: "0",
        col2: "0",
        col3: "0",
        col4: "0",
        col5: "0",
        col6: "0",
        col7: "0",
        col8: "0",
        col9: "1",
        col10: "0",
        col11: "0",
        col12: "0",
        col13: "0",
        col14: "0",
        col15: "0",
        col16: "0",
        col17: "0",
        col18: "0",
        col19: "0",
        col20: "0",
        col21: "0",
        col22: "0",
      },
      {
        FullName: "Mexco",
        employeestatus: "Active",
        col0: "0",
        col1: "0",
        col2: "0",
        col3: "0",
        col4: "0",
        col5: "0",
        col6: "0",
        col7: "0",
        col8: "0",
        col9: "1",
        col10: "0",
        col11: "0",
        col12: "0",
        col13: "0",
        col14: "0",
        col15: "0",
        col16: "0",
        col17: "0",
        col18: "0",
        col19: "0",
        col20: "0",
        col21: "0",
        col22: "0",
      },
      {
        FullName: "Mexco",
        employeestatus: "Active",
        col0: "0",
        col1: "0",
        col2: "0",
        col3: "0",
        col4: "0",
        col5: "0",
        col6: "0",
        col7: "0",
        col8: "0",
        col9: "1",
        col10: "0",
        col11: "0",
        col12: "0",
        col13: "0",
        col14: "0",
        col15: "0",
        col16: "0",
        col17: "0",
        col18: "0",
        col19: "0",
        col20: "0",
        col21: "0",
        col22: "0",
      },
      {
        FullName: "Mexco",
        employeestatus: "Active",
        col0: "0",
        col1: "0",
        col2: "0",
        col3: "0",
        col4: "0",
        col5: "0",
        col6: "0",
        col7: "0",
        col8: "0",
        col9: "1",
        col10: "0",
        col11: "0",
        col12: "0",
        col13: "0",
        col14: "0",
        col15: "0",
        col16: "0",
        col17: "0",
        col18: "0",
        col19: "0",
        col20: "0",
        col21: "0",
        col22: "0",
      },
      {
        FullName: "Mexco",
        employeestatus: "Active",
        col0: "0",
        col1: "0",
        col2: "0",
        col3: "0",
        col4: "0",
        col5: "0",
        col6: "0",
        col7: "0",
        col8: "0",
        col9: "1",
        col10: "0",
        col11: "0",
        col12: "0",
        col13: "0",
        col14: "0",
        col15: "0",
        col16: "0",
        col17: "0",
        col18: "0",
        col19: "0",
        col20: "0",
        col21: "0",
        col22: "0",
      },
      {
        FullName: "Mexco",
        employeestatus: "Active",
        col0: "0",
        col1: "0",
        col2: "0",
        col3: "0",
        col4: "0",
        col5: "0",
        col6: "0",
        col7: "0",
        col8: "0",
        col9: "1",
        col10: "0",
        col11: "0",
        col12: "0",
        col13: "0",
        col14: "0",
        col15: "0",
        col16: "0",
        col17: "0",
        col18: "0",
        col19: "0",
        col20: "0",
        col21: "0",
        col22: "0",
      },
      {
        FullName: "Mexco",
        employeestatus: "Active",
        col0: "0",
        col1: "0",
        col2: "0",
        col3: "0",
        col4: "0",
        col5: "0",
        col6: "0",
        col7: "0",
        col8: "0",
        col9: "1",
        col10: "0",
        col11: "0",
        col12: "0",
        col13: "0",
        col14: "0",
        col15: "0",
        col16: "0",
        col17: "0",
        col18: "0",
        col19: "0",
        col20: "0",
        col21: "0",
        col22: "0",
      },
      {
        FullName: "Mexco",
        employeestatus: "Active",
        col0: "0",
        col1: "0",
        col2: "0",
        col3: "0",
        col4: "0",
        col5: "0",
        col6: "0",
        col7: "0",
        col8: "0",
        col9: "1",
        col10: "0",
        col11: "0",
        col12: "0",
        col13: "0",
        col14: "0",
        col15: "0",
        col16: "0",
        col17: "0",
        col18: "0",
        col19: "0",
        col20: "0",
        col21: "0",
        col22: "0",
      },
      {
        FullName: "Mexco",
        employeestatus: "Active",
        col0: "0",
        col1: "0",
        col2: "0",
        col3: "0",
        col4: "0",
        col5: "0",
        col6: "0",
        col7: "0",
        col8: "0",
        col9: "1",
        col10: "0",
        col11: "0",
        col12: "0",
        col13: "0",
        col14: "0",
        col15: "0",
        col16: "0",
        col17: "0",
        col18: "0",
        col19: "0",
        col20: "0",
        col21: "0",
        col22: "0",
      },
      {
        FullName: "Mexco",
        employeestatus: "Active",
        col0: "0",
        col1: "0",
        col2: "0",
        col3: "0",
        col4: "0",
        col5: "0",
        col6: "0",
        col7: "0",
        col8: "0",
        col9: "1",
        col10: "0",
        col11: "0",
        col12: "0",
        col13: "0",
        col14: "0",
        col15: "0",
        col16: "0",
        col17: "0",
        col18: "0",
        col19: "0",
        col20: "0",
        col21: "0",
        col22: "0",
      },
      {
        FullName: "Mexco",
        employeestatus: "Active",
        col0: "0",
        col1: "0",
        col2: "0",
        col3: "0",
        col4: "0",
        col5: "0",
        col6: "0",
        col7: "0",
        col8: "0",
        col9: "1",
        col10: "0",
        col11: "0",
        col12: "0",
        col13: "0",
        col14: "0",
        col15: "0",
        col16: "0",
        col17: "0",
        col18: "0",
        col19: "0",
        col20: "0",
        col21: "0",
        col22: "0",
      },
      {
        FullName: "Mexco",
        employeestatus: "Active",
        col0: "0",
        col1: "0",
        col2: "0",
        col3: "0",
        col4: "0",
        col5: "0",
        col6: "0",
        col7: "0",
        col8: "0",
        col9: "1",
        col10: "0",
        col11: "0",
        col12: "0",
        col13: "0",
        col14: "0",
        col15: "0",
        col16: "0",
        col17: "0",
        col18: "0",
        col19: "0",
        col20: "0",
        col21: "0",
        col22: "0",
      },
      {
        FullName: "Mexco",
        employeestatus: "Active",
        col0: "0",
        col1: "0",
        col2: "0",
        col3: "0",
        col4: "0",
        col5: "0",
        col6: "0",
        col7: "0",
        col8: "0",
        col9: "1",
        col10: "0",
        col11: "0",
        col12: "0",
        col13: "0",
        col14: "0",
        col15: "0",
        col16: "0",
        col17: "0",
        col18: "0",
        col19: "0",
        col20: "0",
        col21: "0",
        col22: "0",
      },
      {
        FullName: "Mexco",
        employeestatus: "Active",
        col0: "0",
        col1: "0",
        col2: "0",
        col3: "0",
        col4: "0",
        col5: "0",
        col6: "0",
        col7: "0",
        col8: "0",
        col9: "1",
        col10: "0",
        col11: "0",
        col12: "0",
        col13: "0",
        col14: "0",
        col15: "0",
        col16: "0",
        col17: "0",
        col18: "0",
        col19: "0",
        col20: "0",
        col21: "0",
        col22: "0",
      },
      {
        FullName: "Mexco",
        employeestatus: "Active",
        col0: "0",
        col1: "0",
        col2: "0",
        col3: "0",
        col4: "0",
        col5: "0",
        col6: "0",
        col7: "0",
        col8: "0",
        col9: "1",
        col10: "0",
        col11: "0",
        col12: "0",
        col13: "0",
        col14: "0",
        col15: "0",
        col16: "0",
        col17: "0",
        col18: "0",
        col19: "0",
        col20: "0",
        col21: "0",
        col22: "0",
      },
      {
        FullName: "Mexco",
        employeestatus: "Active",
        col0: "0",
        col1: "0",
        col2: "0",
        col3: "0",
        col4: "0",
        col5: "0",
        col6: "0",
        col7: "0",
        col8: "0",
        col9: "1",
        col10: "0",
        col11: "0",
        col12: "0",
        col13: "0",
        col14: "0",
        col15: "0",
        col16: "0",
        col17: "0",
        col18: "0",
        col19: "0",
        col20: "0",
        col21: "0",
        col22: "0",
      },
      {
        FullName: "Mexco",
        employeestatus: "Active",
        col0: "0",
        col1: "0",
        col2: "0",
        col3: "0",
        col4: "0",
        col5: "0",
        col6: "0",
        col7: "0",
        col8: "0",
        col9: "1",
        col10: "0",
        col11: "0",
        col12: "0",
        col13: "0",
        col14: "0",
        col15: "0",
        col16: "0",
        col17: "0",
        col18: "0",
        col19: "0",
        col20: "0",
        col21: "0",
        col22: "0",
      },
      {
        FullName: "Mexco",
        employeestatus: "Active",
        col0: "0",
        col1: "0",
        col2: "0",
        col3: "0",
        col4: "0",
        col5: "0",
        col6: "0",
        col7: "0",
        col8: "0",
        col9: "1",
        col10: "0",
        col11: "0",
        col12: "0",
        col13: "0",
        col14: "0",
        col15: "0",
        col16: "0",
        col17: "0",
        col18: "0",
        col19: "0",
        col20: "0",
        col21: "0",
        col22: "0",
      },
      {
        FullName: "Mexco",
        employeestatus: "Active",
        col0: "0",
        col1: "0",
        col2: "0",
        col3: "0",
        col4: "0",
        col5: "0",
        col6: "0",
        col7: "0",
        col8: "0",
        col9: "1",
        col10: "0",
        col11: "0",
        col12: "0",
        col13: "0",
        col14: "0",
        col15: "0",
        col16: "0",
        col17: "0",
        col18: "0",
        col19: "0",
        col20: "0",
        col21: "0",
        col22: "0",
      },
      {
        FullName: "Mexco",
        employeestatus: "Active",
        col0: "0",
        col1: "0",
        col2: "0",
        col3: "0",
        col4: "0",
        col5: "0",
        col6: "0",
        col7: "0",
        col8: "0",
        col9: "1",
        col10: "0",
        col11: "0",
        col12: "0",
        col13: "0",
        col14: "0",
        col15: "0",
        col16: "0",
        col17: "0",
        col18: "0",
        col19: "0",
        col20: "0",
        col21: "0",
        col22: "0",
      },
    ]
  }
  @ViewChild("tableContainer") 
  public tableContainer!: ElementRef;


  constructor (
    private renderer: Renderer2, 
    private fb: FormBuilder, 
    private e: ElementRef,
    private heroService: HeroesService,
  ){ }
  public rowspan = this.response.rowspan;
  public colspan = this.response.colspan;
  public columns = this.response.columns;



  createTable() {

    const tbl = this.renderer.createElement('table');
    const tblHead = this.renderer.createElement('thead');
    const tblBody = this.renderer.createElement('tbody');

    // creatig rowspan
    this.rowspan.forEach(obj => {
      const t_row = this.renderer.createElement('tr')

      for(const [key, value] of Object.entries(obj)) {

        const t_head = this.renderer.createElement('th');
        this.renderer.setAttribute(t_head, 'rowspan', `${value}`);
        const cellText = this.renderer.createText(`${key}`);

        this.renderer.appendChild(t_head, cellText);
        this.renderer.appendChild(t_row, t_head);
      }
      // add the row to the end of table thead
      this.renderer.appendChild(tblHead, t_row);
    })

    // creatig colspan
    this.colspan.forEach(obj => {
      const t_row = this.renderer.createElement('tr')

      for(const [key, value] of Object.entries(obj)) {

        const t_head = this.renderer.createElement('th');
        this.renderer.setAttribute(t_head, 'colspan', `${value}`);
        const cellText = this.renderer.createText(`${key}`);

        this.renderer.appendChild(t_head, cellText);
        this.renderer.appendChild(t_row, t_head);
      }
      // add the row to the end of table thead
      this.renderer.appendChild(tblHead, t_row);
    })


    // creatig columns
    this.columns.forEach(obj => {
      const t_row = this.renderer.createElement('tr')

      for(const [key, value] of Object.entries(obj)) {

        const t_head = this.renderer.createElement('th');
        //this.renderer.setAttribute(t_head, 'colspan', `${value}`);
        const cellText = this.renderer.createText(`${value}`);

        this.renderer.appendChild(t_head, cellText);
        this.renderer.appendChild(t_row, t_head);
      }
      // add the row to the end of table thead
      this.renderer.appendChild(tblHead, t_row);
    });


    //Creating table Body
       // inserting all data into table Body
       this.filtered = this.data;

       this.filtered.forEach(obj => {
        const t_row = this.renderer.createElement('tr')
  
        for(const [key, value] of Object.entries(obj)) {
  
          const t_head = this.renderer.createElement('td');
          //this.renderer.setAttribute(t_head, 'colspan', `${value}`);
          const cellText = this.renderer.createText(`${value}`);
  
          this.renderer.appendChild(t_head, cellText);
          this.renderer.appendChild(t_row, t_head);
        }
        // add the row to the end of table thead
        this.renderer.appendChild(tblBody, t_row);
      });


    //aca inseertamos todo
    this.renderer.appendChild(tbl, tblHead);
    this.renderer.appendChild(tbl, tblBody);
    this.renderer.addClass(tblBody, 'delete');
    this.renderer.addClass(tbl, 'table')
    this.renderer.appendChild(this.tableContainer.nativeElement, tbl);


    this.showTable = true;
    this.showTablePagination(1)
    

    
  }

  // search func

  //public obj = this.data[0];
  //public property =  Object.keys(this.obj)[2]

  



  //Pagination

  public rowsPerPage = 25;

  onSearch( search: string) {
    this.search = search.toLowerCase();
    const dataFiltered  = this.data.filter(item => item.first_name.toLowerCase().includes( search ))
    const page = 1;


    const indexInit = (page -1) * this.rowsPerPage;
    const indexEnd = indexInit + this.rowsPerPage;

    this.filtered = dataFiltered.slice(indexInit, indexEnd);

    this.createTableBody(this.filtered);
  }

  createTableBody(data: any): void {


    let del = this.e.nativeElement.querySelector('.delete');
    let tableSelector = this.e.nativeElement.querySelector('table');
    if(del != null ) {
    this.renderer.removeChild(this.tableContainer.nativeElement, del)
    }

    const tblBody = this.renderer.createElement('tbody');

       // inserting all data into table Body
       data.forEach((obj:any) => {
        const t_row = this.renderer.createElement('tr')
  
        for(const [key, value] of Object.entries(obj)) {
  
          const t_head = this.renderer.createElement('td');
          //this.renderer.setAttribute(t_head, 'colspan', `${value}`);
          const cellText = this.renderer.createText(`${value}`);
  
          this.renderer.appendChild(t_head, cellText);
          this.renderer.appendChild(t_row, t_head);

        }
        // add the row to the end of table thead
        this.renderer.appendChild(tblBody, t_row);
      });


    //aca inseertamos todo
    this.renderer.addClass(tblBody, 'delete')
    this.renderer.appendChild(tableSelector, tblBody);

    
  }


  //createPaginacion
  onPageChanged(): void {
    this.formPage.get('page')!.valueChanges.subscribe( page => {
      console.log('Page was cjanged', page)
      let actualPage = Number(page);
      this.showTablePagination(actualPage)
    });
  }


  showTablePagination(page: number): void {

    const indexInit = (page -1) * this.rowsPerPage;
    const indexEnd = indexInit + this.rowsPerPage;

    this.filtered = this.data.slice(indexInit, indexEnd);

    this.createTableBody(this.filtered);

  }


  previosPage(): void {
    let currentPage = Number(this.formPage.controls['page'].value);
    let newPage = currentPage-1
    console.log(typeof newPage)
    if(currentPage > 1) {
      this.formPage.setValue({page: newPage.toString()});
    }
  }

  nextPage(): void {


  let totalPages = Math.ceil(this.data.length/this.rowsPerPage);

    console.log('totalPages', totalPages )

    console.log('currentPage', this.formPage.controls['page'].value)

    let currentPage = Number(this.formPage.controls['page'].value);
    let newPage = currentPage+1;
    console.log('newPage', newPage.toString() )


    if(currentPage < totalPages) {
      this.formPage.setValue({page: newPage.toString()});
    }
  }

  firstPage(): void {
    this.formPage.setValue({page: 1});
  }

  lastPage(): void {
    let totalPages = Math.ceil(this.data.length/this.rowsPerPage);
    this.formPage.setValue({page: totalPages});
  }

}
