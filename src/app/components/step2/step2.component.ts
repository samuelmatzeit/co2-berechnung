import { Component, Output, EventEmitter, HostListener, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedService } from '../../shared.service';

interface Location {
  name: string;
  ownership: string;
}

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css'],
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    FormsModule,
    CommonModule,
  ],
})
export class Step2Component implements OnInit {
  locations: Location[] = [{ name: '', ownership: 'Eigentum' }];

  @Output() locationsUpdated = new EventEmitter<string[]>();  // Output event to pass locations to parent component

  constructor(private sharedService: SharedService) { }

  addLocation() {
    this.locations.push({ name: '', ownership: 'Eigentum' });
    this.emitLocations();
  }

  removeLocation(index: number) {
    this.locations.splice(index, 1);
    this.emitLocations();
  }

  emitLocations() {
    const locationNames = this.locations.map(location => location.name);
    this.locationsUpdated.emit(locationNames);
  }

  saveLocations() {
    console.log('Saving locations:', this.locations);
    this.sharedService.saveLocations2(this.locations);
  }

  ngOnInit() {
    const savedLocations2 = this.sharedService.getLocations2();
    console.log('Loaded locations:', savedLocations2);
    if (savedLocations2.length > 0) {
      this.locations = savedLocations2;
    }
  }
}
