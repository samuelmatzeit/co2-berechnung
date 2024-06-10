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

interface Vehicle {
  fuel: string;
  consumption: number;
}

@Component({
  selector: 'app-step5',
  templateUrl: './step5.component.html',
  styleUrls: ['./step5.component.css'],
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
export class Step5Component {
  vehicles: Vehicle[] = [{ fuel: '', consumption: 0 }];
  fuels: string[] = ['Super E10', 'Super', 'Super Plus', 'Diesel', 'Erdgas / CNG'];
  constructor(private sharedService: SharedService) { }

  addVehicle() {
    this.vehicles.push({ fuel: '', consumption: 0 });
  }

  removeVehicle(index: number) {
    this.vehicles.splice(index, 1);
  }

  saveVehicles() {
    const formattedVehicles: types.Fuels5[] = this.vehicles.map(vehicle => ({
      fuel: vehicle.fuel,
      amount: vehicle.consumption.toString()
    }));
    this.sharedService.saveFuels5(formattedVehicles);
  }

  ngOnInit() {
    const savedFuels5 = this.sharedService.getFuels5();
    if (savedFuels5.length > 0) {
      this.vehicles = savedFuels5.map(fuel => ({
        fuel: fuel.fuel,
        consumption: parseFloat(fuel.amount)
      }));
    }
  }


}
