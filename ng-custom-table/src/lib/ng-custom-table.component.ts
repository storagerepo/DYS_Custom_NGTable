import { Component, EventEmitter, Input, OnInit, Output, OnDestroy } from '@angular/core';
import { tableConfig } from './interfaces/input.tableinterfaces';
import * as $ from 'jquery';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NgCustomTableService } from './ng-custom-table.service';
declare var $: $;

@Component({
  selector: 'ng-custom-table',
  templateUrl: './ng-custom-table.component.html',
  styleUrls: ['./ng-custom-table.component.scss']
})
export class NgCustomTableComponent implements OnInit {

  @Input() tableconfig: tableConfig;
  @Output() actionOutput = new EventEmitter<any>();
  @Output() searchOutput = new EventEmitter<any>();
  @Output() onChangeInTable = new EventEmitter<object>();

  public pageNo = 1;
  public order;
  public searchData = {
    all: ""
  };
  public inputType: string = "String";
  public caseInsensitive: boolean = true;
  public reverse = false;
  itemsPerPage: string = "10";
  actionData: any = [
    {
      "title": 'View',
      "type": 'icon',
      "tooltip": 'View',
      "class": 'fa fa-eye text-warning',
    },
    {
      "title": 'Edit',
      "type": 'icon',
      "tooltip": 'Edit',
      "class": 'fa fa-edit text-primary',
    },
    {
      "title": 'Delete',
      "type": 'icon',
      "tooltip": 'Delete',
      "class": 'fa fa-trash text-danger',
    },
    {
      "title": 'Enable',
      "type": 'icon',
      "tooltip": 'Disable',
      "class": 'fa fa-unlock text-success',
      "checkVariable": "status",
      "checkValue": 1
    },
    {
      "title": 'Disable',
      "type": 'icon',
      "tooltip": 'Enable',
      "class": 'fa fa-lock text-muted',
      "checkVariable": "status",
      "checkValue": 0
    }
  ]
  customComponent: any;
  backEndSearch: boolean = false;

  constructor(private sanitizer: DomSanitizer, private ngCustomTableService: NgCustomTableService) { }

  ngOnInit(): void {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
    this.tableconfig.columns = this.ngCustomTableService.checkAndAddInputType(this.tableconfig.columns);
    this.tableconfig.displayAll ? this.itemsPerPage = this.tableconfig.tableData.length.toString() : this.tableconfig.itemsPerPage ? this.itemsPerPage = this.tableconfig.itemsPerPage : '';
    this.order = this.tableconfig.sortBycolumn;
    if (this.tableconfig.sortingorder == 'Desc') this.reverse = true;
    if (this.tableconfig.actionSetting.showActionColumn) this.tableconfig.columns.push({ "title": "Action", "sort": false, "columnObj": "action", "filterString": false, "width": this.tableconfig.actionSetting.width })
    this.tableconfig.actionSetting.include_actions ? this.actionData = this.actionData.filter(actionData => { return this.tableconfig.actionSetting.include_actions.includes(actionData.title) }) : this.actionData = [];
    if (this.tableconfig.backendSearch == true) this.backEndSearch = true;
  }

  sendResponseToUser(data, column, action) {
    var outputData = {
      "row": data,
      "column": column,
      "action": action
    }
    this.actionOutput.emit(outputData);
  }

  sendSearchText() {
    this.searchOutput.emit(this.searchData);
  }

  sanitizeInnerHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  transmitComponentData(row, col, render): any {
    return {
      "column": col,
      "row": row,
      "renderer": render
    }
  }

  sendTableChanges() {
    var paginationData = {
      "limit": Number(this.itemsPerPage),
      "pageNo": this.pageNo
    }
    if (this.order != undefined) {
      paginationData["sortBy"] = this.order;
      paginationData["sortingOrder"] = this.reverse ? 'Desc' : 'Asc';
    }
    this.onChangeInTable.emit(paginationData);
  }

}
