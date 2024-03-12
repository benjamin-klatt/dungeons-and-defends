import { Gameobject } from "../Gameobject";
import { gameobjects } from "../index";
import { Enemy } from "./Enemys/Enemy";
import { Map } from "./Map";

export class Healthbar extends Gameobject {
  enemy: Enemy;

  constructor(enemy: Enemy) {
    super(4);
    this.enemy = enemy;
  }

  render(time: number, ctx: CanvasRenderingContext2D) {
    ctx.lineWidth = 3;
    ctx.strokeStyle =
      "hsl(" + 120 * (this.enemy.life / this.enemy.maxLife) + " 100% 50%)";
    ctx.beginPath();
    ctx.ellipse(
      this.enemy.xPos,
      this.enemy.yPos,
      Math.sqrt(200),
      Math.sqrt(200),
      -Math.PI / 2,
      2 * Math.PI * (1 - this.enemy.life / this.enemy.maxLife),
      2 * Math.PI,
    );
    ctx.stroke();
  }
}
