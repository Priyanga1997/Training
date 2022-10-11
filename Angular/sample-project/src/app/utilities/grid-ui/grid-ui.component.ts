import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grid-ui',
  templateUrl: './grid-ui.component.html',
  styleUrls: ['./grid-ui.component.less']
})
export class GridUiComponent implements OnInit {

  constructor() { }
//getting column names
gridColumns: Array<any> = new Array<any>();

//getting column data
gridData: Array<any> = new Array<any>();
  ngOnInit(): void {
  }
  @Input("grid-columns")
  set SetGridColumns(_gridColumn:Array<any>){
    this.gridColumns=_gridColumn;
  }

  @Input("grid-data")
  set SetGridData(_gridData:Array<any>){
    this.gridData=_gridData;
  }
  @Output("grid-selected")
  emitemitter:EventEmitter<any>=new EventEmitter<any>();

  selectedGrid(_selected:any){
    debugger;
    this.emitemitter.emit(_selected);
  }

  @Output("grid-deleted")
  emitemitterd:EventEmitter<any>=new EventEmitter<any>();

  deleteGrid(_dselected:any){
    this.emitemitter.emit(_dselected);
  }
}