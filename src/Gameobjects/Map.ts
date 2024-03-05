import { Gameobject } from "../Gameobject";
import { Checkpoint } from "./Checkpoint";
import { gameobjects } from "../index";
import { Enemy } from "./Enemys/Enemy";
import { Turret } from "./Turret";

let mapImage = document.getElementById("map") as HTMLImageElement;

export class Map extends Gameobject {
  public entityMap: Array<Array<null | Turret | Checkpoint>> = [];
  public checkpoints: Array<Checkpoint> = [];

  constructor() {
    super(1);
    for (let x = 0; x < 900 / 20; x++) {
      this.entityMap[x] = [];
      for (let y = 0; y < 600 / 20; y++) {
        this.entityMap[x][y] = null;
      }
    }
    this.addCheckpoint(new Checkpoint(30, 0));
    this.addCheckpoint(new Checkpoint(30, 210));
    this.addCheckpoint(new Checkpoint(230, 210));
    this.addCheckpoint(new Checkpoint(230, 410));
    this.addCheckpoint(new Checkpoint(430, 410));
    this.addCheckpoint(new Checkpoint(430, 210));
    this.addCheckpoint(new Checkpoint(630, 210));
    this.addCheckpoint(new Checkpoint(630, 0));
  }
  render(time: number, ctx: CanvasRenderingContext2D) {
    ctx.drawImage(mapImage, 0, 0);
  }
  addCheckpoint(cp: Checkpoint) {
    let lastCheckpoint = this.checkpoints[this.checkpoints.length - 1];
    if (lastCheckpoint) {
      if (lastCheckpoint.xPosCp === cp.xPosCp) {
        //Vertikal
        let smallerY = Math.min(lastCheckpoint.yPosCp, cp.yPosCp);
        let largerY = Math.max(lastCheckpoint.yPosCp, cp.yPosCp);
        for (
          let y = Math.floor(smallerY / 20);
          y < Math.floor(largerY / 20);
          y++
        ) {
          this.entityMap[Math.floor(cp.xPosCp / 20)][y] = cp;
        }
      } else if (lastCheckpoint.yPosCp === cp.yPosCp) {
        //Horizontal
        let smallerX = Math.min(lastCheckpoint.xPosCp, cp.xPosCp);
        let largerX = Math.max(lastCheckpoint.xPosCp, cp.xPosCp);
        for (
          let x = Math.floor(smallerX / 20);
          x < Math.floor(largerX / 20);
          x++
        ) {
          this.entityMap[x][Math.floor(cp.yPosCp / 20)] = cp;
        }
      } else {
        throw new Error("Checkpoint is not in a line");
      }
    }
    this.checkpoints.push(cp);
    gameobjects.push(cp);
  }
  public enemyCount() {
    let count = 0;
    for (let i = 0; i < gameobjects.length; i++) {
      if (gameobjects[i] instanceof Enemy) {
        count = count + 1;
      }
    }
    return count;
  }
}
