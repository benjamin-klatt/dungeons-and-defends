import { Gameobject } from "../Gameobject";

export class Checkpoint extends Gameobject {
    //Eigenschaften
    xPos: number = 0;
    yPos: number = 0;
    
    render(time:number, ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "violet";
        ctx.fillRect(20, 50, 10, 10);
    }
    
}