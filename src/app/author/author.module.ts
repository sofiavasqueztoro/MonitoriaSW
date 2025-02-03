import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthorRoutingModule } from './author-routing.module';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorCreateComponent } from './author-create/author-create.component';
import { AuthorDetailComponent } from './author-detail/author-detail.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AuthorRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AuthorListComponent, AuthorDetailComponent, AuthorCreateComponent]
})
export class AuthorModule { }