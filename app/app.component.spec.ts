import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppComponent } from './app.component';

import { Subject } from 'rxjs/Subject';
import './rxjs-operators';
import { Store } from '@ngrx/store';
import { QUOTES } from './quotes/quotes';
import { REFRESH } from './reducers';

describe('AppComponent', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  let storeStub;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      providers: [{provide: Store, useValue: storeStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement;
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have a blockquote', () => {
    fixture.detectChanges();
    const blockquote = de.query(By.css('blockquote')).nativeElement;
    expect(blockquote).toBeDefined();
  });

  it('should have a blockquote', () => {
    fixture.detectChanges();
    const button = de.query(By.css('button')).nativeElement;
    expect(button).toBeDefined();
  });
});
