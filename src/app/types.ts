export interface Datas1 {
    year: string;
    name: string;
    source: string;
  }
  export interface Locations2 {
    name: string;
    ownership: string;
  }
  export interface Contracts3 {
    name: string;
    type: string;
    factor: string;
  }
  export interface Locations4 {
    location: string;
    contracts: {
      name: string;
      amount: string;
    }[];
  }
  
  export interface Fuels5 {
    fuel: string;
    amount: string;
  }
  export interface Powers6 {
    contract: string;
    amount: string;
  }
  