import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MapComponent } from './components/map/map.component';
import { StatusComponent } from "./components/status/status.component";
import { DayNightBannerComponent } from "./components/day-night-banner/day-night-banner.component";
import { CompassComponent } from "./components/compass/compass.component";
import { ProceedButtonComponent } from "./components/proceed-button/proceed-button.component";
import { CommonModule } from '@angular/common';
import { InventoryContainerComponent } from "./components/inventory/inventory-container/inventory-container.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MapComponent, HttpClientModule, StatusComponent, DayNightBannerComponent, CompassComponent, ProceedButtonComponent, CommonModule, InventoryContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
