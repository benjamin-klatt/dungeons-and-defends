import { Gameobject } from "../Gameobject";

let tavernInnenImage = document.getElementById("tavern") as HTMLImageElement;
export class TavernInnen extends Gameobject {
  xpos = 0;
  ypos = 600;
  width = 800;
  height = 200;
  constructor(){
      super(5);
  }
  render(time: number, ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "#752904";
    ctx.fillRect(this.xpos, this.ypos, this.width, this.height);
    ctx.drawImage(
      tavernInnenImage,
      this.xpos,
      this.ypos,
      this.width,
      this.height
    );
  }
}
