export abstract class Gameobject {
  tick(time: number, dt: number) {}
  render(time: number, ctx: CanvasRenderingContext2D) {}
  onClick(event: MouseEvent) {}
  //zPos ist die Tiefe bei 0 ist nicht sichtbar, bei 1 ist die map und alles aufwärts wird drüber gezeichnet
  zPos: number = 0
  constructor(zPos: number){
    this.zPos = zPos;
  }
}
