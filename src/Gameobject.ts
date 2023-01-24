export abstract class Gameobject {
  tick(time: number) {}
  render(time: number, ctx: CanvasRenderingContext2D) {}
}
