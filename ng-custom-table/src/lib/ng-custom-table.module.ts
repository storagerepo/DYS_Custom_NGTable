import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgCustomTableComponent } from './ng-custom-table.component';
import { PaginationUtilComponent } from './pagination-util/pagination-util.component';
import { SearchPipe } from './search.pipe';
import { CustomViewComponentComponent } from './custom-view-component/custom-view-component.component';

@NgModule({
  declarations: [
    NgCustomTableComponent,
    PaginationUtilComponent,
    SearchPipe,
    CustomViewComponentComponent
],
  imports: [
    OrderModule,
    NgxPaginationModule,
    FormsModule,
    // AngularFontAwesomeModule,
    CommonModule,
  ],
  exports: [NgCustomTableComponent, PaginationUtilComponent],
})
export class NgCustomTableModule { }
