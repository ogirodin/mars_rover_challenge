import { Position } from './Position';
import { Orientation } from './Orientation';
import {MarsGrid} from '../application/MarsGrid';

export class MarsRover {
  private position: Position;
  private lost: boolean = false;

  constructor(initialPosition: Position) {
    this.position = initialPosition;
  }

  public executeCommand(command: string, grid: MarsGrid): void {
    if (this.lost) return;

    switch (command) {
      case 'L':
        this.turnLeft();
        break;
      case 'R':
        this.turnRight();
        break;
      case 'F':
        this.moveForward(grid);
        break;
      default:
        throw new Error(`Unknown command: ${command}`);
    }
  }

  private turnLeft(): void {
    const orientationOrder = [Orientation.N, Orientation.W, Orientation.S, Orientation.E];
    this.position.orientation = orientationOrder[
    (orientationOrder.indexOf(this.position.orientation) + 1) % 4
      ];
  }

  private turnRight(): void {
    const orientationOrder = [Orientation.N, Orientation.E, Orientation.S, Orientation.W];
    this.position.orientation = orientationOrder[
    (orientationOrder.indexOf(this.position.orientation) + 1) % 4
      ];
  }

  private moveForward(grid: MarsGrid): void {
    const newPosition = { ...this.position };

    switch (this.position.orientation) {
      case Orientation.N:
        newPosition.y += 1;
        break;
      case Orientation.E:
        newPosition.x += 1;
        break;
      case Orientation.S:
        newPosition.y -= 1;
        break;
      case Orientation.W:
        newPosition.x -= 1;
        break;
    }

    if (grid.isOutsideGrid(newPosition)) {
      this.lost = true;
    } else {
      this.position = newPosition;
    }
  }

  public getStatus(): string {
    return this.lost
      ? `(${this.position.x}, ${this.position.y}, ${this.position.orientation}) LOST`
      : `(${this.position.x}, ${this.position.y}, ${this.position.orientation})`;
  }
}
