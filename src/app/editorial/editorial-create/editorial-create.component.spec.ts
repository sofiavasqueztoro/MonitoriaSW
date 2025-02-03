import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorialCreateComponent } from './editorial-create.component';
import { DebugElement } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

describe('EditorialCreateComponent', () => {
  let component: EditorialCreateComponent;
  let fixture: ComponentFixture<EditorialCreateComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        ToastrModule.forRoot(),
        HttpClientModule,
        RouterModule.forRoot([]),
      ],
      declarations: [EditorialCreateComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorialCreateComponent);
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
});