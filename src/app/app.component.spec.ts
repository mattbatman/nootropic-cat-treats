import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Action, Store, StoreModule } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';

import { AppComponent } from './app.component';
import * as fromRoot from './reducers';

describe('AppComponent', () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let _store: Store<fromRoot.State>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports: [StoreModule.provideStore(fromRoot.reducer)]
    });

    fixture = TestBed.createComponent(AppComponent);

    _store = fixture.debugElement.injector.get(Store);

    comp = fixture.componentInstance;

    de = fixture.debugElement.query(By.css('button'));
    el = de.nativeElement;
  });

  it('should have a button that says New Quote', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain('New Quote');
  });
});

// export function mockStore<T>({
//   actions = new Subject<Action>(),
//   states = new Subject<T>()
// }: {
//   actions?: Subject<Action>,
//   states?: Subject<T>
// }): Store<T> {
//
//   const result = states as any;
//   result.dispatch = (action: Action) => actions.next(action);
//   return result;
// }

/*
NOTE
Here are two ways to test a component that uses the store
1. Inject the actual store
https://blog.realworldfullstack.io/real-world-angular-part-9-unit-testing-c62ba20b1d93

2. Mock the store
https://stackoverflow.com/questions/43215024/how-to-mock-ngrx-store
or later in the article above

It seems to be considered far better to mock the store, but injecting the real
ngrx store is initially easier
*/
