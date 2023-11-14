import { Gameobject } from "../Gameobject";
import { gameobjects } from "../index";
import { Enemy } from "./Enemy";
import { Turret } from "./Turret";
import { Map } from "./Map";

export class Projectile extends Gameobject {
  speed = 120;
  enemy: Enemy;
  turret: Turret | null = null;
  xPos = 0;
  yPos = 0;
  attackDamage = 0;

  constructor(xPos: number, yPos: number, enemy: Enemy, attackDamage: number) {
    super(3);
    this.xPos = xPos;
    this.yPos = yPos;
    this.enemy = enemy;
    this.attackDamage = attackDamage;
  }

  tick(time: number, dt: number) {
    let xD = this.enemy.xPos - this.xPos;
    let yD = this.enemy.yPos - this.yPos;
    let length = Math.sqrt(Math.pow(xD, 2) + Math.pow(yD, 2));
    let xN = xD / length;
    let yN = yD / length;
    let xB = xN * (this.speed / 1000) * dt;
    let yB = yN * (this.speed / 1000) * dt;
    this.xPos = xB + this.xPos;
    this.yPos = yB + this.yPos;
    if (this.hasFoundEnemy()) {
      this.delete();
      this.enemy.life = Math.max(0, this.enemy.life - this.attackDamage);
    }
  }

  render(time: number, ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "#427388";
    ctx.fillRect(this.xPos - 5, this.yPos - 5, 10, 10);
  }

  private hasFoundEnemy(): boolean {
    let xD = this.enemy.xPos - this.xPos;
    let yD = this.enemy.yPos - this.yPos;
    let length = Math.sqrt(Math.pow(xD, 2) + Math.pow(yD, 2));
    return length <= 10;
  }
}
