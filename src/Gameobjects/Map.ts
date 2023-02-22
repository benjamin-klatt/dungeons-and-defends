import { Gameobject } from "../Gameobject";
import { Checkpoint } from "./Checkpoint";
import { gameobjects } from "../index"

let mapImage = document.getElementById("map") as HTMLImageElement;

export class Map extends Gameobject {
  constructor(){
    super()
    this.addCheckpoint(new Checkpoint(50,50))
    this.addCheckpoint(new Checkpoint(75,75))
  }
  public checkpoints: Array<Checkpoint> = [];
  render(time: number, ctx: CanvasRenderingContext2D) {
    ctx.drawImage(mapImage, 0, 0);
  }
  addCheckpoint(cp: Checkpoint){
    
    this.checkpoints.push(cp);
    gameobjects.push(cp);
  }
  
}
