import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedService } from '../shared.service';
import * as types from '../types';

interface Location {
  contractName: string;
  type: string;
  emissionsFactor: number | null;
  isAutoFilled: boolean;
}

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css'],
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    CommonModule,
  ],
})
export class Step3Component {
  constructor(private sharedService: SharedService) { }

  locations: Location[] = [];

  types: string[] = [
    'Bitte wählen',
    'Erdgas',
    'Heizöl leicht',
    'Heizöl schwer',
    'Flüssiggas',
    'Fernwärme',
    'Strommix',
    'Ökostrom',
  ];

  emissionsFactors: Map<string, number> = new Map<string, number>([
    ['Erdgas', 202],
    ['Heizöl leicht', 266],
    ['Heizöl schwer', 279],
    ['Flüssiggas', 230],
    ['Fernwärme', 125],
    ['Strommix', 475],
    ['Ökostrom', 0],
  ]);

  addLocation() {
    this.locations.push({
      contractName: '',
      type: 'Bitte wählen',
      emissionsFactor: null,
      isAutoFilled: false
    });
    setTimeout(() => {
      const container = document.querySelector('.form-container');
      if (container) {
        container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
      }
    }, 100);
  }

  removeLocation(index: number) {
    this.locations.splice(index, 1);
  }

  onTypeChange(location: Location) {
    if (location.type !== 'Bitte wählen' && this.emissionsFactors.has(location.type)) {
      location.emissionsFactor = this.emissionsFactors.get(location.type) || null;
      location.isAutoFilled = true;
    } else {
      location.emissionsFactor = null;
      location.isAutoFilled = false;
    }
  }

  saveLocations() {
    this.sharedService.saveContracts3(this.locations.map(location => ({
      name: location.contractName,
      type: location.type,
      factor: location.emissionsFactor !== null ? location.emissionsFactor.toString() : ''
    })));
  }

  ngOnInit() {
    const savedContracts3 = this.sharedService.getContracts3();
    if (savedContracts3.length > 0) {
      this.locations = savedContracts3.map(contract => ({
        contractName: contract.name,
        type: contract.type,
        emissionsFactor: contract.factor ? parseFloat(contract.factor) : null,
        isAutoFilled: contract.factor ? this.emissionsFactors.has(contract.type) : false
      }));
    } else {
      // Ein leeres Feld erstellen, wenn keine gespeicherten Daten vorhanden sind
      this.addLocation();
    }
  }

}
