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
  let buttonDE: DebugElement;
  let buttonEL: HTMLElement;
  let quoteDE: DebugElement;
  let quoteEL: HTMLElement;
  let quoteeDE: DebugElement;
  let quoteeEL: HTMLElement;
  let linkDE: DebugElement;
  let linkEL: HTMLLinkElement;
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

    buttonDE = fixture.debugElement.query(By.css('button'));
    buttonEL = buttonDE.nativeElement;

    quoteDE = fixture.debugElement.query(By.css('blockquote'));
    quoteEL = quoteDE.nativeElement;

    quoteeDE = fixture.debugElement.query(By.css('.cite .person'));
    quoteeEL = quoteeDE.nativeElement;

    linkDE = fixture.debugElement.query(By.css('.cite a'));
    linkEL = linkDE.nativeElement;
  });

  it('should have a button that says New Quote', () => {
    fixture.detectChanges();
    expect(buttonEL.textContent).toContain('New Quote');
  });

  it('should display a quote on start-up', () => {
    fixture.detectChanges();
    expect(quoteEL.textContent).toContain('You ever tried skiing on mushrooms?');
  });

  it('should display the name of the quotee or author', () => {
    fixture.detectChanges();
    expect(quoteeEL.textContent).toContain('Aubrey Marcus');
  });

  it('should display the relevant link text', () => {
    fixture.detectChanges();
    expect(linkEL.textContent).toContain('Joe Rogan Experience, #878');
  });

  it('link should lead to provided href', () => {
    fixture.detectChanges();
    expect(linkEL.href).toContain('https://www.youtube.com/watch?v=2xplJOx3Vjw&t=2h27m49s');
  });

  it('should display a new quote when button is pressed', () => {});

  it('should display the new name of the quotee or author when button is pressed', () => {});

  it('should display the new link text when button is pressed', () => {});

  it('new link should lead to new href when button is pressed', () => {});
});
