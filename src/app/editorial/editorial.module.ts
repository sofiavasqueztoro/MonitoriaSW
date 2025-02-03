import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { EditorialListComponent } from './editorial-list/editorial-list.component';
import { EditorialRoutingModule } from './editorial-routing.module';
import { EditorialCreateComponent } from './editorial-create/editorial-create.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    EditorialRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [EditorialListComponent, EditorialCreateComponent],
})
export class EditorialModule { }