import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {
  colors = ['red', '#ccff00', 'blue', ' \t#ff00cf'];
  times$ = new BehaviorSubject<string[]>([]);

  addTime() {
    const list = this.times$.value;
    list.push(new Date().toLocaleTimeString());
    this.times$.next(list);
  }
}
