import { Enemy } from "./Enemy";

export class Goblin extends Enemy {
  //Eigenschaften
  maxLife: number = 100;
  life: number = this.maxLife;
  speed: number = 75;
  bounty: number = 1;
  color: string = "green";
}
