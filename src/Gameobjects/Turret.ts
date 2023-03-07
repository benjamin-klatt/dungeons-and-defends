import { Gameobject } from "../Gameobject";
import { gameobjects } from "../index";
import { Enemy } from "./Enemy";

export class Turret extends Gameobject {
    //Eigenschaften
    attackspeed: number = 0;
    attackdamage: number = 25;
    reach: number = 100;
    critchance: number = 0;
    price:number = 0;
    xPos:number = 10;
    yPos:number = 10;
    
    enemiesInRange(radius:number){
       let results:Array<Enemy> = [];
       for(let i = 0; i < gameobjects.length; i++){
           let enemy = gameobjects[i];
           if (enemy instanceof Enemy){
               let xDiff = enemy.xPos - this.xPos;
               let yDiff = enemy.yPos - this.yPos;
               let distance = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2))
               if (distance < radius){
                   results.push(enemy);
               }
           }
       }
       return results; 
    }
    
    tick(time:number, dt:number){
        let enemies = this.enemiesInRange(this.reach);
        for(let i = 0; i < enemies.length; i++){
            let enemy = enemies[i];
            enemy.life = Math.max(0, enemy.life - (this.attackdamage/1000 * dt)); 
        }
    }
    
    render(time:number, ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "cyan";
        ctx.fillRect(this.xPos, this.yPos, 10, 10);
    }
    
}