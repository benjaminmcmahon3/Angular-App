import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chest-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chest-button.component.html',
  styleUrl: './chest-button.component.css'
})
export class ChestButtonComponent {
  @Input() isOpen = false;
  @Input() isClosing = false;
  @Output() inventoryToggled = new EventEmitter<void>();

  toggleInventoryEmitter() {
    this.inventoryToggled.emit();
  }
}
