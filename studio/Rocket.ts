import { Astronaut } from "./Astronaut";
import { Payload } from "./Payload";
import { Cargo } from "./Cargo";

export class Rocket {
  totalCapacityKg: number;
  name: string;
  cargoItems: Cargo[] = [];
  astronauts: Astronaut[] = [];

  constructor(name: string, totalCapacityKg: number) {
    this.name = name;
    this.totalCapacityKg = totalCapacityKg;
  }
  sumMass = function (items: Payload[]): number {
    let sumMass: number = 0;
    for (let item of items){
        sumMass += item.massKg;
      };
    return sumMass;
  };
  currentMassKg = function (): number {            
    return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
  };
  canAdd = function (item: Payload): boolean {
    return (this.currentMassKg() + item.massKg) <= this.totalCapacityKg;
  };

  addCargo(cargo: Cargo): boolean {
      if (this.canAdd(cargo)) {
          this.cargoItems.push(cargo);
          return true;
      } else {
          return false;
      }
  }
  addAstronaut(astronaut: Astronaut): boolean {
      if (this.canAdd(astronaut)) {
          this.astronauts.push(astronaut);
          return true;
      } else {
          return false;
      }
  }
};
