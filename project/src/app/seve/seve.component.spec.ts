/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SeveComponent } from './seve.component';

describe('SeveComponent', () => {
  let component: SeveComponent;
  let fixture: ComponentFixture<SeveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
