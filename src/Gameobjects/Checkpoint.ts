import { Gameobject } from "../Gameobject";

export class Checkpoint extends Gameobject {
    //Eigenschaften
    xPosCp: number = 20;
    yPosCp: number = 50;
    
    render(time:number, ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "violet";
        ctx.fillRect(this.xPosCp, this.yPosCp, 10, 10);
    }
    
}