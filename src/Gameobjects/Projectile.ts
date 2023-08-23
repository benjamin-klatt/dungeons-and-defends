import { Gameobject } from "../Gameobject";
import { gameobjects } from "../index";
import { Enemy } from "./Enemy";
import { Turret } from "./Turret";
import { Map } from "./Map";

export class Projectile extends Gameobject {
  speed = 0;
  colision = 0;
  targetXPos = 0;
  targetYPos = 0;
  turret: Turret | null = null;
  xPos = 0;
  yPos = 0;

  constructor(xPos:number, yPos:number, enemy:Enemy) {
    super(3);
  }
  getCurrentEnemy() {
    if (this.turret) {
      return this.turret.enemy[];
    }//hier bitte löschen
  }
}
