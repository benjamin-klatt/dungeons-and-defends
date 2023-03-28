import { Gameobject } from "../Gameobject";
import { TavernInnen } from "./TavernInnen";

export class Tavern extends Gameobject {
  xpos = 0;
  ypos = 500;
  width = 100;
  height = 100;
  gameobjects: Array<Gameobject>;
  constructor(gameobjects: Array<Gameobject>) {
    super();
    this.gameobjects = gameobjects;
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
      console.log("hallo Taverne");
      this.gameobjects.push(new TavernInnen());
      //hier soll sich ein Interface öffnen auf dem nochmal Buttons entstehen
      //dafür muss ich ein Gameobject erstellen
    }
  }
  //Befindet sich Event.ClientX,ClientY auf der Taverne
}
