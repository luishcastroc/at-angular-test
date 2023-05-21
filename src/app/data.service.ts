import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  #itemsSubject = new BehaviorSubject<string[]>([]);

  get items$() {
    return this.#itemsSubject.asObservable();
  }

  get items() {
    return this.#itemsSubject.value;
  }

  addItem(item: string) {
    const updatedItems = [...this.items, item];
    this.#itemsSubject.next(updatedItems);
  }

  removeItem(item: string) {
    const updatedItems = this.items.filter((i) => i !== item);
    this.#itemsSubject.next(updatedItems);
  }
}
