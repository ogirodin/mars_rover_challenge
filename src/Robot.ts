import {TOrientation} from './types';
import {IRobot} from './_interfaces/robot.interfaces';

export class Robot implements IRobot {

  constructor(private x: number, private y: number, private orientation: TOrientation) {}

  moveForward(): void {
    console.log('moveForward');
  }

  moveLeft(): void {
    console.log('moveLeft');
  }

  moveRight(): void {
    console.log('moveRight');
  }

  getPosition(): string {
    return `(${this.x} ${this.y} ${this.orientation})`;
  }
}
