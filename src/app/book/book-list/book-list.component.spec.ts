import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListComponent } from './book-list.component';
import { DebugElement } from '@angular/core';
import { BookDetail } from '../book-detail';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { BookService } from '../book.service';
import { Editorial } from '../../editorial/editorial';
import { faker } from '@faker-js/faker';
import { By } from '@angular/platform-browser';
import { CustomFilterPipe } from '../custom-filter-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;
  let debug: DebugElement;
  let debugBookDetail: BookDetail;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterModule.forRoot([]), NgxPaginationModule, FormsModule],
      declarations: [ BookListComponent, CustomFilterPipe ],
      providers: [ BookService, CustomFilterPipe ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;

    let editorial = new Editorial(
      faker.number.int(),
      faker.lorem.sentence()
    );

    let testBooks: Array<BookDetail> = [];

    for(let i = 0; i<10; i++) {
      testBooks[i] = new BookDetail(
        faker.number.int(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.image.url(),
        faker.date.past(),
        editorial,
        [],[]
      );
    }

    component.books = testBooks;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*it('should have 10 <div.col.mb-2> elements', () => {
    expect(debug.queryAll(By.css('div.col.mb-2')).length == 10).toBeTrue();
  });*/

  it('should have 10 <card.p-2> elements', () => {
    expect(debug.queryAll(By.css('div.card.p-2')).length == 10).toBeTrue();
  });

  it('should have 10 <img> elements', () => {
    expect(debug.queryAll(By.css('img')).length == 10).toBeTrue();
  });

  it('should have 10 <div.card-body> elements', () => {
    expect(debug.queryAll(By.css('div.card-body')).length == 10).toBeTrue();
  });

  it('should have the corresponding src to the book image', () => {
    debug.queryAll(By.css('img')).forEach((img, i)=>{
      expect(img.attributes['src']).toEqual(
        component.books[i].image)
    })
  });

  it('should have the corresponding alt to the book name', () => {
    debug.queryAll(By.css('img')).forEach((img, i)=>{
      expect(img.attributes['alt']).toEqual(
        component.books[i].name)
    });
  });

  it('should have h5 tag with the book.name', () => {
    debug.queryAll(By.css('h5')).forEach((h5, i)=>{
      expect(h5.nativeElement.textContent).toContain(component.books[i].name)
    });
  });

  it('should have p tag with the book.editorial.name', () => {
    debug.queryAll(By.css('p')).forEach((p, i)=>{
      expect(p.nativeElement.textContent).toContain(component.books[i].editorial.name)
    });
  });

  /*it('should have 9 <div.col.mb-2> elements and the deleted book should not exist', () => {
    debugBookDetail = component.books.pop()!;
    fixture.detectChanges();
    expect(debug.queryAll(By.css('div.col.mb-2')).length == 9).toBeTrue();

    debug.queryAll(By.css('div.col.mb-2')).forEach((selector, i)=>{
      expect(selector.nativeElement.textContent).not.toContain(debugBookDetail.name);
    });
  });*/
});