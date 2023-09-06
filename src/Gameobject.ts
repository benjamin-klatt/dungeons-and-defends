import { gameobjects } from "./index";
export abstract class Gameobject {
  public gameobjects: Array<Gameobject> = gameobjects;
  tick(time: number, dt: number) {}
  render(time: number, ctx: CanvasRenderingContext2D) {}
  onClick(event: MouseEvent) {}
  onMouseMove(event: MouseEvent) {}

  delete() {
    let index = this.gameobjects.indexOf(this);
    this.gameobjects.splice(index, 1);
  }

  //zPos ist die Tiefe bei 0 ist nicht sichtbar, bei 1 ist die map und alles aufwärts wird drüber gezeichnet
  zPos: number = 0;
  constructor(zPos: number) {
    this.zPos = zPos;
  }
}
