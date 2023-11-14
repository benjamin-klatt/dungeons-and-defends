import { Gameobject } from "../Gameobject";
import { Checkpoint } from "./Checkpoint";
import { gameobjects } from "../index";
import { Enemy } from "./Enemy";

let mapImage = document.getElementById("map") as HTMLImageElement;

export class Map extends Gameobject {
  constructor() {
    super(1);
    this.addCheckpoint(new Checkpoint(30, 0));
    this.addCheckpoint(new Checkpoint(30, 210));
    this.addCheckpoint(new Checkpoint(230, 210));
    this.addCheckpoint(new Checkpoint(230, 410));
    this.addCheckpoint(new Checkpoint(430, 410));
    this.addCheckpoint(new Checkpoint(430, 210));
    this.addCheckpoint(new Checkpoint(630, 210));
    this.addCheckpoint(new Checkpoint(630, 0));
  }
  public checkpoints: Array<Checkpoint> = [];
  render(time: number, ctx: CanvasRenderingContext2D) {
    ctx.drawImage(mapImage, 0, 0);
  }
  addCheckpoint(cp: Checkpoint) {
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
