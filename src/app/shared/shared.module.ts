import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableViewComponent } from './table-view/table-view.component';
import {MatIconModule} from '@angular/material/icon';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgxUiLoaderModule } from "ngx-ui-loader";

@NgModule({
  declarations: [TableViewComponent],
  imports: [
    CommonModule, 
    MatIconModule, 
    NgxPaginationModule, 
    MatPaginatorModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxUiLoaderModule
  ],
  exports: [TableViewComponent, MatIconModule]
})
export class SharedModule {}
