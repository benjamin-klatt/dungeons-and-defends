import { Gameobject } from "../Gameobject";

export class Tavern extends Gameobject {
  render(time: number, ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "#752904";
    ctx.fillRect(0, 500, 100, 100);
  }
}
