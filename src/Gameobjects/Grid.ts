import { gameobjects } from "../index";
import { Gameobject } from "../Gameobject";
import { Map } from "./Map";

export class Grid extends Gameobject {
  map: Map;
  width: number = 20;
  heigth: number = 20;

  constructor(map: Map) {
    super(2);
    this.map = map;
  }

  tick(time: number, dt: number) {}

  render(time: number, ctx: CanvasRenderingContext2D) {
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#d87d22a6";
    ctx.beginPath();
    for (let x = 0; x <= 900; x = x + this.width) {
      for (let y = 0; y <= 600; y = y + this.heigth) {
        ctx.rect(x, y, this.width, this.heigth);
      }
    }
    ctx.stroke();
  }
}
