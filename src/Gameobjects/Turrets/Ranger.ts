import { Turret, AttackType } from "./Turret";

export class Ranger extends Turret {
  //Eigenschaften
  attackspeed: number = 1000;
  attackdamage: number = 25;
  reach: number = 250;
  critchance: number = 0;
  static price: number = 10;
  cooldown: number = 0;
  attackType: AttackType = AttackType.FIRST;
}
