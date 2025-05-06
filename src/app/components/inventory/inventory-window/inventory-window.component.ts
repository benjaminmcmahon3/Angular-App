import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-inventory-window',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inventory-window.component.html',
  styleUrls: ['./inventory-window.component.css'],
  animations: [
    trigger('grow', [
      state(
        'open',
        style({
          height: '500px'
        })
      ),
      state(
        'closed',
        style({
          height: '0px'
        })
      ),
      transition('closed => open', [animate('300ms ease-out')]), // Grow
      transition('open => closed', [animate('300ms ease-in')]), // Shrink
    ]),
  ],
})
export class InventoryWindowComponent {
  @Input() isOpen = false;
}