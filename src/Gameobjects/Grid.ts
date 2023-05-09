import { gameobjects } from "../index";
import { Gameobject } from "../Gameobject";
import { Map } from "./Map";

export class Grid extends Gameobject {
  map: Map;
  width: number = 15;
  heigth: number = 15;

  constructor(map: Map) {
    super(2);
    this.map = map;
  }

  tick(time: number, dt: number) {}

  render(time: number, ctx: CanvasRenderingContext2D) {
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.beginPath();
    for (let x = 0; x <= 900; x = x + this.width) {
      for (let y = 0; y <= 600; y = y + this.heigth) {
        ctx.rect(x, y, this.width, this.heigth);
      }
    }
    ctx.stroke();
  }
}
