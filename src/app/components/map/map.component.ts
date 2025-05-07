import { Component, EventEmitter, Output } from '@angular/core';

export interface DestinationCoordinates {
  x: number;
  y: number;
}

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  @Output() mapClicked = new EventEmitter<DestinationCoordinates>

  onMapClick(event: MouseEvent): void {
    const x = event.clientX;
    const y = event.clientY;
    this.mapClicked.emit({ x, y });
    console.log('Map clicked at: ', { x, y });
  }
}
