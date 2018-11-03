import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html'
})
export class PagingComponent implements OnInit, OnChanges {
  @Input() public totalRecords = 0;
  @Input() pageSize = 2;
  @Output() indexChange = new EventEmitter<any>();
  pageCount: number[];
  pageIndex = 1;

  ngOnInit() {
    this.createPaging();
  }

  createPaging() {
    const n: number = Math.floor(this.totalRecords / this.pageSize);
    let totalPages = 0;
    if (this.totalRecords / this.pageSize > n) {
      totalPages = n + 1;
    } else {
      totalPages = n;
    }
    this.pageCount = Array(totalPages).fill(0).map((x, i) => i + 1); // [1,2,3,4]
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['totalRecords'] && !isNullOrUndefined(this.totalRecords)) {
      this.createPaging();
    }
  }

  public getPage(pageIndex: number) {
    this.indexChange.emit({ pageIndex });
    this.pageIndex = pageIndex;
  }


  public nextPage() {
    if (this.pageIndex < this.pageCount.length) {
      this.pageIndex = this.pageIndex + 1;
      this.indexChange.emit({ pageIndex: this.pageIndex });
    }
  }

  public previousPage() {
    if (this.pageIndex > 1) {
      this.pageIndex = this.pageIndex - 1;
      this.indexChange.emit({ pageIndex: this.pageIndex });
    }
  }
}
