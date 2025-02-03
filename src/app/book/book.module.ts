import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { BookRoutingModule } from './book-routing.module';
import { CustomFilterPipe } from './custom-filter-pipe.pipe';



@NgModule({
  declarations: [
    BookListComponent,
    BookDetailComponent,
    BookCreateComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    CustomFilterPipe,
    BookRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule
  ],
  exports: [BookListComponent],
  providers: [CustomFilterPipe]
})
export class BookModule { }