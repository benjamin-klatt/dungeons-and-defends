import { Gameobject } from "../Gameobject";
import { Checkpoint } from "./Checkpoint";

let mapImage = document.getElementById("map") as HTMLImageElement;

export class Map extends Gameobject {
  public checkpoints: Array<Checkpoint> = [];
  render(time: number, ctx: CanvasRenderingContext2D) {
    ctx.drawImage(mapImage, 0, 0);
  }
}
