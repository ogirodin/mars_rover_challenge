import {TOrientation} from './types';
import {IRobot} from './_interfaces/robot.interfaces';
import {Grid} from './grid';

export class Robot implements IRobot {

  private lost = false;

  constructor(private x: number, private y: number, private orientation: TOrientation) {}

  moveForward(): void {
    if (this.lost) return;
    const newPosition = {x: this.x, y: this.y};
    switch (this.orientation) {
      case 'N':newPosition.y += 1;break;
      case 'E': newPosition.x += 1; break;
      case 'S': newPosition.y -= 1; break;
      case 'W': newPosition.x -= 1; break;
    }

    // we have to check if the new position is inside the grid
    if (Grid.getInstance(0, 0).isLost(newPosition)) {
      this.lost = true;
    } else {
      this.x = newPosition.x;
      this.y = newPosition.y;
    }
  }

  moveLeft(): void {
    if (this.lost) return;
    const orientations: TOrientation[] = ['N', 'W', 'S', 'E'];
    this.orientation = orientations[(orientations.indexOf(this.orientation) + 1) % 4];
  }

  moveRight(): void {
    if (this.lost) return;
    const orientations: TOrientation[] = ['N', 'E', 'S', 'W'];
    this.orientation = orientations[(orientations.indexOf(this.orientation) + 1) % 4];
  }

  getPosition(): string {
    return `(${this.x} ${this.y} ${this.orientation}) ${this.lost ? 'LOST' : ''}`;
  }
}
