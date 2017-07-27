import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Action, Store, StoreModule } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';

import { AppComponent } from './app.component';
import * as fromRoot from './reducers';
import { MockStore } from './test-helpers/store';

describe('AppComponent', () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let mockedStore: Store<fromRoot.State>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports: [StoreModule.provideStore(fromRoot.reducer)],
      providers: [
        { provide: Store, useValue: new MockStore({ quoteNumber: 0 }) }
      ]
    });

    fixture = TestBed.createComponent(AppComponent);

    mockedStore = fixture.debugElement.injector.get(Store);

    comp = fixture.componentInstance;

    de = fixture.debugElement.query(By.css('button'));
    el = de.nativeElement;
  });

  it('should have a button that says New Quote', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain('New Quote');
  });

  it('should display a quote on start-up', () => {});

  it('should display the name of the quotee or author', () => {});

  it('should display the relevant link', () => {});

  it('should display a new quote when button is pressed', () => {});

  it('should display the new name of the quotee or author when button is pressed', () => {});

  it('should display the new link when button is pressed', () => {});
});
