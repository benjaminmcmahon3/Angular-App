import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inventory-window',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inventory-window.component.html',
  styleUrls: ['./inventory-window.component.css'],
})
export class InventoryWindowComponent {
  @Input() isOpen = false;
}
