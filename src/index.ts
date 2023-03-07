import { Gameobject } from "./Gameobject";
import { Map } from "./Gameobjects/Map";

import { Tavern } from "./Gameobjects/Tavern";
import { Turret } from "./Gameobjects/Turret"
import { Enemy } from "./Gameobjects/Enemy"
import { Checkpoint } from "./Gameobjects/Checkpoint"

//Array mit allen Gameobjects:
export let gameobjects = [] as Array<Gameobject>;
let canvas = document.getElementById("steve") as HTMLCanvasElement;
let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
let map = new Map();
let lasttime = 0;

gameobjects.push(map);
gameobjects.push(new Tavern());
gameobjects.push(new Turret());
gameobjects.push(new Enemy(map));

document.onclick = handleMouseClick;
function handleMouseClick(event: MouseEvent) {
  for (let x = 0; x < gameobjects.length; x = x + 1) {
    let gameobject = gameobjects[x];
    gameobject.onClick(event);
  }
}
//render loop:
function loop(time: number) {
  let dt = time-lasttime;
  for (let x = 0; x < gameobjects.length; x = x + 1) {
    let gameobject = gameobjects[x];
    gameobject.tick(time, dt)
  }
  for (let x = 0; x < gameobjects.length; x = x + 1) {
    let gameobject = gameobjects[x];
    gameobject.render(time, ctx);
  }
  lasttime = time;
  requestAnimationFrame(loop);
}
loop(0);
