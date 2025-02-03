import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorCreateComponent } from './author-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { AuthorService } from '../author.service';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

describe('AuthorCreateComponent', () => {
  let component: AuthorCreateComponent;
  let fixture: ComponentFixture<AuthorCreateComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        ToastrModule.forRoot(),
        HttpClientModule,
        RouterModule.forRoot([]),
      ],
      declarations: [AuthorCreateComponent],
      providers: [AuthorService],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a button with id submit and with type submit', () => {
    expect(debug.query(By.css('#submit')).attributes['type']).toEqual('submit');
  });

  it('should have an input with id name and with formControlName name', () => {
    expect(debug.query(By.css('#name')).attributes['formControlName']).toEqual(
      'name'
    );
  });

  it('should have an input with id image and with formControlName image', () => {
    expect(debug.query(By.css('#image')).attributes['formControlName']).toEqual(
      'image'
    );
  });

  it('should have an input with id birthDate and with formControlName birthDate', () => {
    expect(
      debug.query(By.css('#birthDate')).attributes['formControlName']
    ).toEqual('birthDate');
  });

  it('should have an input with id description and with formControlName description', () => {
    expect(
      debug.query(By.css('#description')).attributes['formControlName']
    ).toEqual('description');
  });
});