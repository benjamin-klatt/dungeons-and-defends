import { Gameobject } from "./Gameobject";
import { Map } from "./Gameobjects/Map";

import { Tavern } from "./Gameobjects/Tavern";
import { Turret } from "./Gameobjects/Turret"
import { Enemy } from "./Gameobjects/Enemy"

//Array mit allen Gameobjects:
let gameobjects = [] as Array<Gameobject>;
let canvas = document.getElementById("steve") as HTMLCanvasElement;
let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

gameobjects.push(new Map());
gameobjects.push(new Tavern());
gameobjects.push(new Turret());
gameobjects.push(new Enemy())

//render loop:
function loop(time: number) {
  for (let x = 0; x < gameobjects.length; x = x + 1) {
    let gameobject = gameobjects[x];
    gameobject.tick(time);
  }
  for (let x = 0; x < gameobjects.length; x = x + 1) {
    let gameobject = gameobjects[x];
    gameobject.render(time, ctx);
  }
  requestAnimationFrame(loop);
}
loop(0);
