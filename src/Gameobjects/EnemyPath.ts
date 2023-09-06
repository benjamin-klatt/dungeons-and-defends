import { gameobjects } from "../index";
import { Gameobject } from "../Gameobject";
import { Map } from "./Map";

export class EnemyPath extends Gameobject {
  map: Map;

  constructor(map: Map) {
    super(2);
    this.map = map;
  }

  render(time: number, ctx: CanvasRenderingContext2D) {
    ctx.lineWidth = 20;
    ctx.strokeStyle = "#FF000088";
    ctx.beginPath();
    ctx.moveTo(this.map.checkpoints[0].xPosCp, this.map.checkpoints[0].yPosCp);
    for (let i = 1; i < this.map.checkpoints.length; i++) {
      ctx.lineTo(
        this.map.checkpoints[i].xPosCp,
        this.map.checkpoints[i].yPosCp
      );
    }
    ctx.stroke();
  }
}
