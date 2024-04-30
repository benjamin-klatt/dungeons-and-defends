import { Turret } from "./Turrets/Turret";
import { Gameobject } from "../Gameobject";
import { InsideTavern } from "./InsideTavern";
import { gameobjects, map } from "../index";

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
    this.xPosRect = Math.round((event.offsetX - 10) / 20) * 20;
    this.yPosRect = Math.round((event.offsetY - 10) / 20) * 20;
  }

  onClick(event: MouseEvent) {
    if (
      this.turret !== null &&
      event.offsetY < 600 &&
      this.isFree(event.offsetX, event.offsetY)
    ) {
      this.turret.xPos = Math.round((event.offsetX - 10) / 20) * 20 + 10;
      this.turret.yPos = Math.round((event.offsetY - 10) / 20) * 20 + 10;
      gameobjects.push(this.turret);
      map.entityMap[Math.floor(this.turret.xPos / 20)][
        Math.floor(this.turret.yPos / 20)
      ] = this.turret;
      this.turret = null;
    }
  }

  isFree(xPos: number, yPos: number) {
    if (map.entityMap[Math.floor(xPos / 20)][Math.floor(yPos / 20)] === null) {
      return true;
    } else {
      return false;
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
