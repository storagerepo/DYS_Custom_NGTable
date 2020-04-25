import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ng-pagination-util',
  templateUrl: './pagination-util.component.html',
  styleUrls: ['./pagination-util.component.scss']
})
export class PaginationUtilComponent implements OnInit {

  @Input() input: any;
  @Input() pageNo: any;
  @Input() itemsPerPage: any;
  @Input() totalRecords: Number;
  @Input() viewshowall: Boolean = true;
  @Output() goToPage = new EventEmitter<Number>();
  @Output() getItemPerPage = new EventEmitter<String>();
  @Output() getPageNo = new EventEmitter<String>();

  public math = Math;
  currentPageconf = 1;
  toPage: any;
  constructor() { }

  ngOnInit() {
  }

  goToPageAction(toPage: any) {
    if (toPage > 0) {
      this.goToPage.emit(toPage);
    }
  }

  changeItemsPerPage(itemsPerPage: any) {
    this.setPageNo(1);
    this.getItemPerPage.emit(itemsPerPage);

  }

  setPageNo(pageNo: any) {
    if (pageNo > 0)
      this.getPageNo.emit(pageNo);
  }


}
