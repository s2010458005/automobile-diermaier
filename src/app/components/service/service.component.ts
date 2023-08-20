import { Component } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { ServiceItem } from './service-item';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent {
  items: ServiceItem[] = [
    new ServiceItem(
      'assets/icons/fahrzeugsuche2.png',
      'Verkauf',
      'Ich biete Gebrauchtwagen zur besten Qualität an.',
      ['hallo', 'servus'],
    ),
    new ServiceItem(
      'assets/icons/car.png',
      'Fahrzeugsuche',
      'Sie träumen schon immer von Ihrem Traumwagen? Ich suche Ihr Tramfahrzeug zum besten Angebot.',
      ['hallo', 'servus'],
    ),
    new ServiceItem(
      'assets/icons/money.png',
      'Finanzierung',
      'Ich finde Ihr passendes Finanzierungsangebot für Ihr Auto.',
      ['hallo', 'servus'],
    ),
  ];

  expandedIndex = 0;
}
