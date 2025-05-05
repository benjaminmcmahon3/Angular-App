import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class InventoryStateService {
  private isOpenSubject = new BehaviorSubject<boolean>(false);
  private isClosingSubject = new BehaviorSubject<boolean>(false);

  isOpen$ = this.isOpenSubject.asObservable();
  isClosing$ = this.isClosingSubject.asObservable();

  toggleInventory() {
    const isOpen = this.isOpenSubject.value;
    this.isOpenSubject.next(!isOpen);

    if (!isOpen) {
      this.isClosingSubject.next(false);
    } else {
      this.isClosingSubject.next(true);
      setTimeout(() => this.isClosingSubject.next(false), 300);
    }
  }
}