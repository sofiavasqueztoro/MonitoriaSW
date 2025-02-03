import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorListComponent } from './author-list.component';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AuthorDetail } from '../author-detail';
import { BookDetail } from '../../book/book-detail';
import { Editorial } from '../../editorial/editorial';
import { faker } from '@faker-js/faker';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

describe('AuthorListComponent', () => {
  let component: AuthorListComponent;
  let fixture: ComponentFixture<AuthorListComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule, RouterModule.forRoot([])],
      declarations: [ AuthorListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorListComponent);
    component = fixture.componentInstance;

    let testAuthors: Array<AuthorDetail>= [];
    let testBooks: Array<BookDetail> = [];
    let editorial = new Editorial(
      faker.number.int(),
      faker.lorem.sentence()
    );

    for(let i = 0; i<2; i++) {
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
    for(let i = 0; i<10; i++) {
      testAuthors[i] = new AuthorDetail(
        faker.number.int(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.image.url(),
        testBooks
      );
    }

    component.authors = testAuthors;

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 10 <div.book-card> elements', () => {
    expect(debug.queryAll(By.css('div.book-card')).length == 10).toBeTrue();
  });

  it('should have 10 <img> elements', () => {
    expect(debug.queryAll(By.css('img')).length == 10).toBeTrue();
  });

  it('should have the corresponding src to the author image', () => {
    debug.queryAll(By.css('img')).forEach((img, i)=>{
      expect(img.attributes['src']).toEqual(
        component.authors[i].image);
    });
  });

  it('should have the corresponding alt to the author name', () => {
    debug.queryAll(By.css('img')).forEach((img, i)=>{
      expect(img.attributes['alt']).toEqual(
        component.authors[i].name);
    });
  });

  it('should have h5 tag with the author.name', () => {
    debug.queryAll(By.css('h5')).forEach((h5, i)=>{
      expect(h5.nativeElement.textContent).toContain(component.authors[i].name);
    });
  });

  it('should have p tag with the author.birthDate', () => {
    debug.queryAll(By.css('p')).forEach((p, i)=>{
      expect(p.nativeElement.textContent).toContain(component.authors[i].birthDate);
    });
  });
});