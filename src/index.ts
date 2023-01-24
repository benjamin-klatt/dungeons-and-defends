import { Gameobject } from "./Gameobject";
import { Map } from "./Gameobjects/Map";
//Array mit allen Gameobjects:
let gameobjects = [] as Array<Gameobject>;
let canvas = document.getElementById("Steve") as HTMLCanvasElement;
let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

gameobjects.push(new Map());

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
