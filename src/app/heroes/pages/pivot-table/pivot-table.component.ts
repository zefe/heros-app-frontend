import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pivot-table',
  templateUrl: './pivot-table.component.html',
  styleUrls: ['./pivot-table.component.css']
})
export class PivotTableComponent implements OnInit {

  public  response = {
    rowspan: [
      {
        "Full Name": 7,
        "Employee Status": 7,
      }
    ],
    colspan: [
      {
        "Catalyst PK Sub": 23
      },
      {
        "Automation & Ops": 1,
        "Data & Analitics": 15,
        "Digital Enginnering": 2,
        "Strategy & Design": 5
      },
      {
        "TestOps": 1,
        "Business Insights": 15,
        "Omnichannel Experience": 1,
        "Integration Services": 1,
        "Product Realization": 5
      }
    ],
    columns: [
      {
        col0: "col 0",
        col1: "col 1",
        col2: "col 2",
        col3: "col 3",
        col4: "col 4",
        col5: "col 5",
        col6: "col 6",
        col7: "col 7",
        col8: "col 8",
        col9: "col 9",
        col10: "col 10",
        col11: "col 11",
        col12: "col 12",
        col13: "col 13",
        col14: "col 14",
        col15: "col 15",
        col16: "col 16",
        col17: "col 17",
        col18: "col 18",
        col19: "col 19",
        col20: "col 20",
        col21: "col 21",
        col22: "col 22",
      }
    ],
    data: [
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
      }
    ]
  }

  
  @ViewChild("table") 
  public table!: ElementRef;


  constructor (private renderer: Renderer2){ }

  public rowspan = this.response.rowspan;
  public colspan = this.response.colspan;
  public columns = this.response.columns;
  public data = this.response.data;


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


       // inserting all data into table Body
       this.data.forEach(obj => {
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





    //aca inseertamos todo
    this.renderer.appendChild(tbl, tblHead);
    this.renderer.appendChild(tbl, tblBody);
    this.renderer.appendChild(this.table.nativeElement, tbl);



  }


    ngOnInit() {

}
}
