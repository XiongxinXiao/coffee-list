import { Component, ContentChild, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'div[app-table]',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @ContentChild(`title`) title!: TemplateRef<any>;
  @ContentChild(`body`) body!: TemplateRef<any>;
  @ContentChild(`pagination`) pagination!: TemplateRef<any>;  
  constructor() { }

  ngOnInit() {
  }
}
