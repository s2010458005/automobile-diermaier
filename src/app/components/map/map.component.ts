import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit{
  map!: L.Map;
  marker!: L.Marker;

  lat: number = 48.253655;
  lng: number = 13.517057;

  ngAfterViewInit(): void {
    this.initializeMap();
  }

  initializeMap() {
    this.map = L.map('map').setView([this.lat, this.lng], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    }).addTo(this.map);

    this.marker = L.marker([this.lat, this.lng]).addTo(this.map);
  }

}
