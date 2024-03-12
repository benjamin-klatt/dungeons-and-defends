import { Gameobject } from "./Gameobject";
import { Map } from "./Gameobjects/Map";
import { InsideTavern } from "./Gameobjects/InsideTavern";
import { Grid } from "./Gameobjects/Grid";
import { Tavern } from "./Gameobjects/Tavern";
import { Turret } from "./Gameobjects/Turret";
import { Enemy } from "./Gameobjects/Enemys/Enemy";
import { Checkpoint } from "./Gameobjects/Checkpoint";
import { NewEnemyButton } from "./Gameobjects/NewEnemyButton";
import { Rounds } from "./Gameobjects/Rounds";
import { Placer } from "./Gameobjects/Placer";
import { EnemyPath } from "./Gameobjects/EnemyPath";
import { GoldValue } from "./Gameobjects/GoldValue";

//Array mit allen Gameobjects:
export let gameobjects = [] as Array<Gameobject>;
let canvas = document.getElementById("steve") as HTMLCanvasElement;
let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
export let map = new Map();
let lasttime = 0;

gameobjects.push(map);
gameobjects.push(new Tavern());
gameobjects.push(new NewEnemyButton());
export let rounds = new Rounds(20);
gameobjects.push(rounds);
gameobjects.push(map);
gameobjects.push(new Grid(map));
export let placer = new Placer();
gameobjects.push(placer);
gameobjects.push(new EnemyPath(map));
export let goldValue = new GoldValue();
gameobjects.push(goldValue);

document.onclick = handleMouseClick;
function handleMouseClick(event: MouseEvent) {
  for (let x = 0; x < gameobjects.length; x = x + 1) {
    let gameobject = gameobjects[x];
    gameobject.onClick(event);
  }
}

export let mousePos = { x: 0, y: 0 };

document.onmousemove = handleMouseMove;
function handleMouseMove(event: MouseEvent) {
  mousePos.x = event.offsetX;
  mousePos.y = event.offsetY;
  for (let x = 0; x < gameobjects.length; x = x + 1) {
    let gameobject = gameobjects[x];
    gameobject.onMouseMove(event);
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
