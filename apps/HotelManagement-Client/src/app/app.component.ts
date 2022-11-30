import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { frenchGreet, HindiGreet, SpanishGreet } from './modules/Store/simple.action';


interface AppState {
  message: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HotelManagement-Client';

  message$: Observable<string>

  constructor(private store: Store<AppState>) {
    this.message$ = this.store.select('message')
  }

  hindiMessage() {
    this.store.dispatch(new HindiGreet)
  }
  spanishMessage() {
    this.store.dispatch(new SpanishGreet)
  }

  frenchMessage() {
    this.store.dispatch(new frenchGreet)
  }
}

