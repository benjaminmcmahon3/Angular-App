import { Component } from '@angular/core';
import { InventoryWindowComponent } from '../inventory-window/inventory-window.component';
import { ChestButtonComponent } from "../chest-button/chest-button.component";
import { InventoryStateService } from '../../../services/inventory-state.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inventory-container',
  standalone: true,
  imports: [InventoryWindowComponent, ChestButtonComponent, CommonModule],
  templateUrl: './inventory-container.component.html',
  styleUrl: './inventory-container.component.css'
})
export class InventoryContainerComponent {
  isOpen$ = this.inventoryStateService.isOpen$;
  isClosing$ = this.inventoryStateService.isClosing$;

  constructor(private inventoryStateService: InventoryStateService) {}

  toggleInventory() {
    this.inventoryStateService.toggleInventory();
  }
}
