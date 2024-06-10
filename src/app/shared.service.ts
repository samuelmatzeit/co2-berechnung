import { Injectable } from '@angular/core';
import * as types from './types';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private storageKeys = {
    step1: 'step1',
    step2: 'step2',
    step3: 'step3',
    step4: 'step4',
    step5: 'step5',
    step6: 'step6'
  };

  constructor() { }

  // Löschen aller gespeicherten Daten
  clearAllData() {
    Object.values(this.storageKeys).forEach(key => {
      localStorage.removeItem(key);
    });
  }

  // Speichern von Daten
  saveDatas1(data: types.Datas1[]): void {
    localStorage.setItem(this.storageKeys.step1, JSON.stringify(data));
  }

  getDatas1(): types.Datas1[] {
    const data = localStorage.getItem(this.storageKeys.step1);
    return data ? JSON.parse(data) : [];
  }

  saveLocations2(data: types.Locations2[]): void {
    localStorage.setItem(this.storageKeys.step2, JSON.stringify(data));
  }

  getLocations2(): types.Locations2[] {
    const data = localStorage.getItem(this.storageKeys.step2);
    return data ? JSON.parse(data) : [];
  }

  saveContracts3(data: types.Contracts3[]): void {
    localStorage.setItem(this.storageKeys.step3, JSON.stringify(data));
  }

  getContracts3(): types.Contracts3[] {
    const data = localStorage.getItem(this.storageKeys.step3);
    return data ? JSON.parse(data) : [];
  }

  getFilteredContracts(excludeTypes: string[] = [], includeTypes: string[] = []): types.Contracts3[] {
    const contracts = this.getContracts3();
    if (excludeTypes.length > 0) {
      return contracts.filter(contract => !excludeTypes.includes(contract.type));
    }
    if (includeTypes.length > 0) {
      return contracts.filter(contract => includeTypes.includes(contract.type));
    }
    return contracts;
  }

  saveLocations4(data: types.Locations4[]): void {
    localStorage.setItem(this.storageKeys.step4, JSON.stringify(data));
  }

  getLocations4(): types.Locations4[] {
    const data = localStorage.getItem(this.storageKeys.step4);
    return data ? JSON.parse(data) : [];
  }

  validateLocations4(savedLocations: types.Locations4[], currentLocations: types.Locations2[], currentContracts: types.Contracts3[]): types.Locations4[] {
    return savedLocations.map(location => ({
      location: location.location,
      contracts: location.contracts.filter(contract => 
        currentContracts.some(c => c.name === contract.name)
      )
    })).filter(location => location.contracts.length > 0);
  }

  saveFuels5(data: types.Fuels5[]): void {
    localStorage.setItem(this.storageKeys.step5, JSON.stringify(data));
  }

  getFuels5(): types.Fuels5[] {
    const data = localStorage.getItem(this.storageKeys.step5);
    return data ? JSON.parse(data) : [];
  }

  savePowers6(data: types.Powers6[]): void {
    localStorage.setItem(this.storageKeys.step6, JSON.stringify(data));
  }

  getPowers6(): types.Powers6[] {
    const data = localStorage.getItem(this.storageKeys.step6);
    return data ? JSON.parse(data) : [];
  }


  
  getInvertedContracts(includeTypes: string[] = []): types.Contracts3[] {
    const contracts = this.getContracts3();
    if (includeTypes.length > 0) {
      return contracts.filter(contract => !includeTypes.includes(contract.type));
    }
    return contracts;
  }
  
}
