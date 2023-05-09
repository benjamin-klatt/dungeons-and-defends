import { Gameobject } from "./Gameobject";
import { Map } from "./Gameobjects/Map";
import { TavernInnen } from "./Gameobjects/TavernInnen";
import { Grid } from "./Gameobjects/Grid";
import { Tavern } from "./Gameobjects/Tavern";
import { Turret } from "./Gameobjects/Turret";
import { Enemy } from "./Gameobjects/Enemy";
import { Checkpoint } from "./Gameobjects/Checkpoint";
import { NewEnemyButton } from "./Gameobjects/NewEnemyButton";
import { Rounds } from "./Gameobjects/Rounds";
//Array mit allen Gameobjects:
export let gameobjects = [] as Array<Gameobject>;
let canvas = document.getElementById("steve") as HTMLCanvasElement;
let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
export let map = new Map();
let lasttime = 0;

gameobjects.push(map);
gameobjects.push(new Tavern());
gameobjects.push(new Turret(10, 10));
gameobjects.push(new Enemy(map));
gameobjects.push(new NewEnemyButton());
export let rounds = new Rounds(20);
gameobjects.push(rounds);
gameobjects.push(map);
gameobjects.push(new Grid(map));

document.onclick = handleMouseClick;
function handleMouseClick(event: MouseEvent) {
  for (let x = 0; x < gameobjects.length; x = x + 1) {
    let gameobject = gameobjects[x];
    gameobject.onClick(event);
  }
}
//render loop:
function loop(time: number) {
  //console.log(gameobjects);
  gameobjects.sort(function compareFn(a, b) {
    return b.zPos - a.zPos;
  });
  let dt = time - lasttime;

  for (let x = gameobjects.length - 1; x >= 0; x--) {
    let gameobject = gameobjects[x];
    gameobject.tick(time, dt);
  }
  for (let x = gameobjects.length - 1; x >= 0; x--) {
    let gameobject = gameobjects[x];
    gameobject.render(time, ctx);
  }
  lasttime = time;
  requestAnimationFrame(loop);
}
loop(0);
