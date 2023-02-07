import { Gameobject } from "../Gameobject";

export class Tavern extends Gameobject {
  xpos = 0;
  ypos = 500;
  width = 100;
  height = 100;
  render(time: number, ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "#752904";
    ctx.fillRect(this.xpos, this.ypos, this.width, this.height);
  }


// wenn man auf die Taverne klickt soll sich ein Interface öffnen
 onClick(event: MouseEvent){
   let xPosInField: boolean = event.clientX <= (this.xpos+this.width) && event.clientX >= this.xpos;
     let yPosInField: boolean = event.clientY <= (this.ypos+this.height) && event.clientY >= this.ypos;
   if(xPosInField && yPosInField) 
   {
     console.log ("hallo Taverne")
      //hier soll sich ein Interface öffnen auf dem nochmal Buttons entstehen
      //dafür muss ich ein Gameobject erstellen
   
 }
}
 //Befindet sich Event.ClientX,ClientY auf der Taverne
