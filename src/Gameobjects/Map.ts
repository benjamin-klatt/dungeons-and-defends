import { Gameobject } from "../Gameobject";

let mapImage = document.getElementById("map") as HTMLImageElement;

export class Map extends Gameobject {
  render(time: number, ctx: CanvasRenderingContext2D) {
    ctx.drawImage(mapImage, 0, 0);
  }
}
