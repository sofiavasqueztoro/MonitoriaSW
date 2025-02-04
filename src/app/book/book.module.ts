import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { BookRoutingModule } from './book-routing.module';
import { CustomFilterPipeModule } from './custom-filter.pipe.module';



@NgModule({
  declarations: [
    BookListComponent,
    BookDetailComponent,
    BookCreateComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    CustomFilterPipeModule,
    BookRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule
  ],
  exports: [BookListComponent],
  providers: [CustomFilterPipeModule]
})
export class BookModule { }