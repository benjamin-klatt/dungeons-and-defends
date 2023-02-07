import { Gameobject } from "../Gameobject";

export class Turret extends Gameobject {
    //Eigenschaften
    attackspeed: number = 0;
    attackdamage: number = 0;
    reach: number = 0;
    critchance: number = 0;
    price:number = 0;
    
    render(time:number, ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "cyan";
        ctx.fillRect(10, 10, 10, 10);
    }
    
}