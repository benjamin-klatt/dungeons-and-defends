import { Turret } from "./Turret";
import { Gameobject } from "../Gameobject";
import { TavernInnen } from "./TavernInnen";
import { TavernInnenMenschen } from "./TavernInnenMenschen";
import { gameobjects } from "../index";

export class Placer extends Gameobject {
  xPosRect = 0;
  yPosRect = 0;
  widthRect = 10;
  heightRect = 10;
  turret: Turret | null = null;
  constructor() {
    super(10);
  }
  onMouseMove(event: MouseEvent) {
    this.xPosRect = event.offsetX;
    this.yPosRect = event.offsetY;
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
        this.heightRect
      );
    }
  }
}
