import { Gameobject } from "../Gameobject";
import { InsideTavern } from "./InsideTavern";
import { InsideTavernButton } from "./InsideTavernButton";
import { gameobjects } from "../index";

export class Tavern extends Gameobject {
  xpos = 0;
  ypos = 500;
  width = 100;
  height = 100;
  tavernOpen = false;
  insideTavern: InsideTavern | null = null;
  insideTavernButton: InsideTavernButton | null = null;
  constructor() {
    super(4);
  }

  render(time: number, ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "#752904";
    ctx.fillRect(this.xpos, this.ypos, this.width, this.height);
  }

  // wenn man auf die Taverne klickt soll sich ein Interface öffnen
  onClick(event: MouseEvent) {
    console.log(event);
    let xPosInField: boolean =
      event.offsetX <= this.xpos + this.width && event.offsetX >= this.xpos;
    let yPosInField: boolean =
      event.offsetY <= this.ypos + this.height && event.offsetY >= this.ypos;
    if (xPosInField && yPosInField) {
      if (this.tavernOpen === false) {
        this.insideTavern = new InsideTavern();
        this.gameobjects.push(this.insideTavern);
        this.insideTavernButton = new InsideTavernButton();
        this.gameobjects.push(this.insideTavernButton);
        this.tavernOpen = true;
      } else if (this.insideTavern && this.insideTavernButton) {
        let tavernIndex = this.gameobjects.indexOf(this.insideTavern);
        this.gameobjects.splice(tavernIndex, 1);
        let tavernMenschenIndex = this.gameobjects.indexOf(
          this.insideTavernButton,
        );
        this.gameobjects.splice(tavernMenschenIndex, 1);
        this.tavernOpen = false;
      }
      //hier soll sich ein Interface öffnen auf dem nochmal Buttons entstehen
      //dafür muss ich ein Gameobject erstellen
    }
  }
  //Befindet sich Event.ClientX,ClientY auf der Taverne
}
