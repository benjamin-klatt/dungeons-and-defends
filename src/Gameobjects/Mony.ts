import { gameobjects } from "../index";
import { Gameobject } from "../Gameobject";
import { Map } from "./Map";
import { Enemy } from "./Enemy";
import { Turret } from "./Turret";

export class Mony extends Gameobject {
  monyCount: number = 0;

  constructor(map: Map) {
    super(8);
    this.map = map;
  }
}
