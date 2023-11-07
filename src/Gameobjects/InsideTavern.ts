import { Gameobject } from "../Gameobject";
let insideTavernImage = document.getElementById("insideTavernImage") as HTMLImageElement;
export class InsideTavern extends Gameobject {
  xpos = 0;
  ypos = 600;
  width = 900;
  height = 200;
  constructor() {
    super(5);
  }
  render(time: number, ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "#752904";
    ctx.fillRect(this.xpos, this.ypos, this.width, this.height);
    ctx.drawImage(
      insideTavernImage,
      this.xpos,
      this.ypos,
      this.width,
      this.height
    );
  }
}
