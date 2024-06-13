import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedService } from '../../shared.service';
import * as types from '../../types';

interface Contract {
  name: string;
  amount: number;
}
interface Locations2 {
  name: string;
  ownership: string;
}
interface Location {
  name: string;
  contracts: Contract[];
}

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.css'],
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
export class Step4Component {
  constructor(private sharedService: SharedService) { }
  loadedLocations: Locations2[] = [];
  contracts: string[] = [];
  locations: Location[] = [{ name: 'Gesamt', contracts: [{ name: '', amount: 0 }] }];
  contractUnits: { [key: string]: string } = {
    'Bitte wählen': '',
    'Erdgas': 'kWh',
    'Heizöl leicht': 'Liter',
    'Heizöl schwer': 'Liter',
    'Flüssiggas': 'kg',
    'Fernwärme': 'kWh',
    'Strommix': 'kWh',
    'Ökostrom': 'kWh',
  };

  ngOnInit() {
    this.loadedLocations = this.sharedService.getLocations2();
    const currentContracts = this.sharedService.getContracts3();
    const savedLocations4 = this.sharedService.getLocations4();

    // Setze die invertierten Vertragsoptionen
    this.contracts = this.sharedService.getInvertedContracts(['Strom', 'Fernwärme']).map(contract => contract.name);

    // Validierte und kombinierte Daten für die Standorte und Verträge
    const validLocations4 = this.sharedService.validateLocations4(savedLocations4, this.loadedLocations, currentContracts);

    // Alle Standorte aus Step2 hinzufügen
    this.loadedLocations.forEach(element => {
      if (element.name) {
        const savedLocation = validLocations4.find(loc => loc.location === element.name);
        if (savedLocation) {
          this.locations.push({
            name: element.name,
            contracts: savedLocation.contracts.map(contract => ({
              name: contract.name,
              amount: parseFloat(contract.amount)
            }))
          });
        } else {
          this.locations.push({ name: element.name, contracts: [{ name: '', amount: 0 }] });
        }
      }
    });

    // Gesamt-Standort behandeln
    const savedGesamt = validLocations4.find(loc => loc.location === 'Gesamt');
    if (savedGesamt) {
      this.locations[0].contracts = savedGesamt.contracts.map(contract => ({
        name: contract.name,
        amount: parseFloat(contract.amount)
      }));
    }
  }

  getContractUnit(contractName: string): string {
    const contractType = this.sharedService.getContracts3().find(contract => contract.name === contractName)?.type || 'Einheit';
    return this.contractUnits[contractType] || 'Einheit';
  }

  addContract(locationIndex: number) {
    this.locations[locationIndex].contracts.push({ name: '', amount: 0 });
    setTimeout(() => {
      const container = document.querySelector('.form-container');
      if (container) {
        container.scrollTo({
          top: container.scrollHeight,
          behavior: 'smooth'
        });
      }
    }, 100);
  }

  removeContract(locationIndex: number, contractIndex: number) {
    this.locations[locationIndex].contracts.splice(contractIndex, 1);
  }

  saveAssignments() {
    const formattedLocations: types.Locations4[] = this.locations.map(location => ({
      location: location.name,
      contracts: location.contracts.map(contract => ({
        name: contract.name,
        amount: contract.amount.toString() // Hier sicherstellen, dass amount ein string ist
      }))
    }));
    this.sharedService.saveLocations4(formattedLocations);
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadHandler(event: Event) {
    this.saveAssignments();
  }
}
