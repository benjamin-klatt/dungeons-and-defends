import { gameobjects, map } from "../index";
import { Gameobject } from "../Gameobject";
import { Goblin } from "./Enemys/Goblin";

export class Rounds extends Gameobject {
  mouseOnField: boolean = false;
  mouseClick: boolean = false;
  xPosRect: number = 60;
  yPosRect: number = 300;
  widthRect: number = 20;
  heightRect: number = 20;
  rounds: number = 0;

  render(time: number, ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "violet";
    ctx.fillRect(this.xPosRect, this.yPosRect, this.widthRect, this.heightRect);
  }

  onClick(event: MouseEvent) {
    let xPosInField: boolean =
      event.clientX <= this.xPosRect + this.widthRect &&
      event.clientX >= this.xPosRect;
    let yPosInField: boolean =
      event.clientY <= this.yPosRect + this.heightRect &&
      event.clientY >= this.yPosRect;
    if (xPosInField && yPosInField) {
      if (map.enemyCount() <= 0) {
        //Hier soll ein neuer Enemy nun entstehen
        this.enemySpawner(this.rounds);
        this.rounds = this.rounds + 1;
      }
    }
  }
  enemySpawner(currentRound: number, alreadyPlaced: number = 0) {
    let roundData = [
      [Goblin, Goblin, Goblin],
      [Goblin, Goblin, Goblin, Goblin, Goblin, Goblin],
    ];
    let currentEnemy = roundData[currentRound][alreadyPlaced];
    if (currentEnemy === undefined) return;
    gameobjects.push(new currentEnemy(map));
    setTimeout(() => {
      this.enemySpawner(currentRound, alreadyPlaced + 1);
    }, 1000);
  }
}
