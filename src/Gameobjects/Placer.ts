import { Turret } from "./Turret";
import { Gameobject } from "../Gameobject";
import { TavernInnen } from "./TavernInnen";
import { TavernInnenMenschen } from "./TavernInnenMenschen";
export class Placer extends Gameobject {
  xPosRect = 0;
  yPosRect = 0;
  widthRect = 10;
  heightRect = 10;
  constructor() {
    super(10);
  }
  onMouseMove(event: MouseEvent) {
    this.xPosRect = event.offsetX;
    this.yPosRect = event.offsetY;
  }
  render(time: number, ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "cyan";
    ctx.fillRect(this.xPosRect, this.yPosRect, this.widthRect, this.heightRect);
  }
}
