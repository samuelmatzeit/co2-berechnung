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

interface Energy {
  contract: string;
  amount: number;
}

@Component({
  selector: 'app-step6',
  templateUrl: './step6.component.html',
  styleUrls: ['./step6.component.css'],
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
export class Step6Component {
  energies: Energy[] = [{ contract: '', amount: 0 }];
  contracts: string[] = ['Vertrag 1', 'Vertrag 2', 'Vertrag 3']; // Add your contract options here

  constructor(private sharedService: SharedService) { }

  addEnergy() {
    this.energies.push({ contract: '', amount: 0 });
  }

  removeEnergy(index: number) {
    this.energies.splice(index, 1);
  }

  saveEnergies() {
    const formattedEnergies: types.Powers6[] = this.energies.map(energy => ({
      contract: energy.contract,
      amount: energy.amount.toString()
    }));
    this.sharedService.savePowers6(formattedEnergies);
  }

  ngOnInit() {
    const savedPowers6 = this.sharedService.getPowers6();
    if (savedPowers6.length > 0) {
      this.energies = savedPowers6.map(power => ({
        contract: power.contract,
        amount: parseFloat(power.amount)
      }));
    }
    const contractsloaded = this.sharedService.getContracts3();
    console.log(contractsloaded)
    if (contractsloaded.length > 0) {
      this.contracts = this.sharedService.getFilteredContracts([], ['Strommix', 'Ökostrom', 'Fernwärme']).map(contract => contract.name);
      if (this.contracts.length == 0){
        
        this.contracts = ['Nichts hinterlegt']; // Add your contract options here
      }
    }
  }


}
