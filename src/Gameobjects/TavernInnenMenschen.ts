import { Turret } from "./Turret";
import { Gameobject } from "../Gameobject";
import { TavernInnen } from "./TavernInnen";
import { Placer } from "./Placer";
export class TavernInnenMenschen extends Gameobject {
  xpos = 100;
  ypos = 700;
  width = 50;
  height = 50;
  constructor() {
    super(6);
  }
  render(time: number, ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "#752904";
    ctx.fillRect(this.xpos, this.ypos, this.width, this.height);
  }

  onClick(event: MouseEvent) {
    let xPosInField: boolean =
      event.offsetX <= this.xpos + this.width && event.offsetX >= this.xpos;
    let yPosInField: boolean =
      event.offsetY <= this.ypos + this.height && event.offsetY >= this.ypos;
    if (xPosInField && yPosInField) {
      this.gameobjects.push(new Placer());
    }
  }
} // immer wenn dieser Knopf gedrückt wird soll ein neuer turret an der Maus gespawnt werden
/**
 * 1. Button gedrückt✓
 * 2. turret wird an der Maus angezeigt✓
 * 3.die Maus bewegt sich mit Turret✓
 * 4. die Maus wird geklickt
 * 5. der Turret wird an dieser Stelle platziert
 */
