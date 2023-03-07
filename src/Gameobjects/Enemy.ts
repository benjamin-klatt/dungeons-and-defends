import { Gameobject } from "../Gameobject";
import { Map } from "./Map";

export class Enemy extends Gameobject {
    //Eigenschaften
    life: number = 100;
    speed: number = 75;
    xPos: number = 20;
    yPos: number = 20;
    bounty: number = 0;
    map:Map;
    cpNumber: number = 0;
    
    constructor(map:Map){
        super()
        this.map = map;
    }
    
    getCurrentCheckpoint(){
        return this.map.checkpoints[this.cpNumber];
    }
    //D: Direction, N:Normalenvektor, B: Einheitsvektor
    tick(time:number, dt:number) { //ToDo: Deltazeit in Index.ts noch machen
           
      if (this.hasFoundCheckpoint()){
          if (this.map.checkpoints.length - 1 > this.cpNumber){
            this.cpNumber++;
          }
          else {
              return
          }
      }
      let xD = this.getCurrentCheckpoint().xPosCp - this.xPos;
      let yD = this.getCurrentCheckpoint().yPosCp - this.yPos;
      let lenght = Math.sqrt(Math.pow(xD,2) + (Math.pow(yD,2)));
      let xN = xD / lenght;
      let yN = yD / lenght;
      let xB = xN * (this.speed / 1000) * dt
      let yB = yN * (this.speed / 1000) * dt;
      this.xPos = xB + this.xPos;
      this.yPos = yB + this.yPos;
    }
    
    render(time:number, ctx: CanvasRenderingContext2D) {
        let red = 255 * (100-this.life)/100;
        let green = 255 * (this.life)/100;
        ctx.fillStyle = "rgb("+red+","+green+",0)";
        ctx.fillRect(this.xPos, this.yPos, 10, 10);
    }
    private hasFoundCheckpoint():boolean{
        return Math.round(this.getCurrentCheckpoint().xPosCp) === Math.round(this.xPos) && Math.round(this.getCurrentCheckpoint().yPosCp) === Math.round(this.yPos);
    }
    
}