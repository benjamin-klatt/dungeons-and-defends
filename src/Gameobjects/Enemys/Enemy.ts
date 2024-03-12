import { gameobjects, goldValue } from "../../index";
import { Gameobject } from "../../Gameobject";
import { Map } from "./../Map";
import { Healthbar } from "../Healthbar";
import { mousePos } from "../../index";

export abstract class Enemy extends Gameobject {
  //Eigenschaften
  abstract maxLife: number;
  abstract life: number;
  abstract speed: number;
  xPos: number;
  yPos: number;
  abstract bounty: number;
  abstract color: string;
  openHealthbar: Healthbar | null = null;
  map: Map;
  cpNumber: number = 1;
  constructor(map: Map) {
    super(3);
    this.map = map;
    this.xPos = this.getFirstCheckpoint().xPosCp;
    this.yPos = this.getFirstCheckpoint().yPosCp;
  }

  getFirstCheckpoint() {
    return this.map.checkpoints[0];
    //soll eigentlich für die x und y startkoordinate verwendet werden
  }

  getCurrentCheckpoint() {
    return this.map.checkpoints[this.cpNumber];
  }

  //D: Direction, N:Normalenvektor, B: Einheitsvektor
  tick(time: number, dt: number) {
    //ToDo: Deltazeit in Index.ts noch machen

    if (this.cpNumber < this.map.checkpoints.length) {
      let xD = this.getCurrentCheckpoint().xPosCp - this.xPos;
      let yD = this.getCurrentCheckpoint().yPosCp - this.yPos;
      let length = Math.sqrt(Math.pow(xD, 2) + Math.pow(yD, 2));
      let xN = xD / length;
      let yN = yD / length;
      let xB = xN * (this.speed / 1000) * dt;
      let yB = yN * (this.speed / 1000) * dt;
      this.xPos = xB + this.xPos;
      this.yPos = yB + this.yPos;
      if (this.hasFoundCheckpoint()) {
        this.cpNumber++;
      }
    }

    let xPosInField: boolean =
      mousePos.x <= this.xPos + 15 && mousePos.x >= this.xPos - 15;
    let yPosInField: boolean =
      mousePos.y <= this.yPos + 15 && mousePos.y >= this.yPos - 15;
    if (xPosInField && yPosInField && this.openHealthbar === null) {
      this.openHealthbar = new Healthbar(this);
      gameobjects.push(this.openHealthbar);
    } else if ((!xPosInField || !yPosInField) && this.openHealthbar !== null) {
      this.openHealthbar.delete();
      this.openHealthbar = null;
    }

    if (this.life <= 0) {
      //console.log(gameobjects.indexOf(this));
      gameobjects.splice(gameobjects.indexOf(this), 1);
      goldValue.gold = goldValue.gold + this.bounty;
    }
  }

  render(time: number, ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.xPos - 10, this.yPos - 10, 20, 20);
  }
  private hasFoundCheckpoint(): boolean {
    let xD = this.getCurrentCheckpoint().xPosCp - this.xPos;
    let yD = this.getCurrentCheckpoint().yPosCp - this.yPos;
    let length = Math.sqrt(Math.pow(xD, 2) + Math.pow(yD, 2));
    return length <= 1;
  }
}
