import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Emission {
  amount: number;
  description: string;
}

@Component({
  selector: 'app-current-emissions',
  templateUrl: './current-emissions.component.html',
  styleUrls: ['./current-emissions.component.css'],
  standalone: true,
  imports: [CommonModule] // CommonModule hinzufügen, um *ngFor zu verwenden
})
export class CurrentEmissionsComponent {
  emissions: Emission[] = [
    { amount: 16, description: 'Fahrzeugflotte' },
    { amount: 12, description: 'Strom' },
    { amount: 12, description: 'Klimaanlage' },
    { amount: 9, description: 'Heizung' },
    { amount: 7, description: 'Abfall' },
    { amount: 3, description: 'Wasserverbrauch' },
    { amount: 1, description: 'Bürogeräte' }
  ];
}
