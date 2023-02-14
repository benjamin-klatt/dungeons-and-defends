import { Gameobject } from "../Gameobject";
import { Map } from "./Map";

export class Enemy extends Gameobject {
    //Eigenschaften
    life: number = 0;
    speed: number = 0;
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
    
    tick(time:number) {
      let xD= this.getCurrentCheckpoint().xPosCp - this.xPos;
      let yD= this.getCurrentCheckpoint().yPosCp - this.yPos;
    }
    
    render(time:number, ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "lime";
        ctx.fillRect(this.xPos, this.yPos, 10, 10);
    }
    
}