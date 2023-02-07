import { Gameobject } from "../Gameobject";
import { Map } from "./Map";

export class Enemy extends Gameobject {
    //Eigenschaften
    life: number = 0;
    speed: number = 0;
    xPos: number = 20;
    yPos: number = 20;
    xPosGoal: number = 0;
    yPosGoal: number = 0;
    bounty: number = 0;
    map:Map;
    cpNumber: number = 0;
    
    constructor(map:Map){
        super()
        this.map = map;
    }
    tick(time:number) {
        
    }
    
    render(time:number, ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "lime";
        ctx.fillRect(this.xPos, this.yPos, 10, 10);
    }
    
}