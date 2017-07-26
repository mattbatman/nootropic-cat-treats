import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { map } from 'rxjs/operator/map';

export class MockStore<T> extends BehaviorSubject<T> {

  constructor(private _initialState: T) {
    super(_initialState);
  }

  dispatch = (action: Action): void => { };

  select = <T, R>(pathOrMapFn: any, ...paths: string[]): Observable<R> => {
    return map.call(this, pathOrMapFn);
  }
}

/*
NOTE
On testing components that use @ngrx
https://blog.realworldfullstack.io/real-world-angular-part-9-unit-testing-c62ba20b1d93
https://stackoverflow.com/questions/43215024/how-to-mock-ngrx-store
*/
