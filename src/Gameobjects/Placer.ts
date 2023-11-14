import { Turret } from "./Turret";
import { Gameobject } from "../Gameobject";
import { InsideTavern } from "./InsideTavern";
import { gameobjects } from "../index";

export class Placer extends Gameobject {
  xPosRect = 0;
  yPosRect = 0;
  widthRect = 20;
  heightRect = 20;
  turret: Turret | null = null;
  constructor() {
    super(10);
  }
  onMouseMove(event: MouseEvent) {
    this.xPosRect = event.offsetX - 10;
    this.yPosRect = event.offsetY - 10;
  }

  onClick(event: MouseEvent) {
    if (this.turret !== null) {
      this.turret.xPos = event.offsetX;
      this.turret.yPos = event.offsetY;
      gameobjects.push(this.turret);
      this.turret = null;
    }
  }

  render(time: number, ctx: CanvasRenderingContext2D) {
    if (this.turret) {
      ctx.fillStyle = "cyan";
      ctx.fillRect(
        this.xPosRect,
        this.yPosRect,
        this.widthRect,
        this.heightRect,
      );
    }
  }
}
