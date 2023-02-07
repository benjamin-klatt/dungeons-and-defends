import { Gameobject } from "../Gameobject";

export class Enemy extends Gameobject {
    //Eigenschaften
    life: number = 0;
    speed: number = 0;
    xPos: number = 0;
    yPos: number = 0;
    xPosGoal: number = 0;
    yPosGoal: number = 0;
    bounty:number = 0;
    
    render(time:number, ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "lime";
        ctx.fillRect(20, 20, 10, 10);
    }
    
}