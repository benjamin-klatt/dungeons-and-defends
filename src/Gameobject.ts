export abstract class Gameobject {
  tick(time: number, dt: number) {}
  render(time: number, ctx: CanvasRenderingContext2D) {}
  onClick(event: MouseEvent) {}
}
