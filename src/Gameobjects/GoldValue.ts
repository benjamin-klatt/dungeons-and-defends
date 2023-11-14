import { Gameobject } from "../Gameobject";
export class GoldValue extends Gameobject {
  gold = 0;
  constructor() {
    super(6);
  }
  render(time: number, ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "red";
    ctx.font = "48px Georgia";
    ctx.fillText(String(this.gold), 60, 60);
  }
}
