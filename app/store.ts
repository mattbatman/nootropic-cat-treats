import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { quote } from './reducers';

@NgModule({
  imports: [StoreModule.provideStore({quote})]
})

export class AppStoreModule {}
