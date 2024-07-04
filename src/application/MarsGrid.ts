import {Position} from '../domain/Position';

export class MarsGrid {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  public isOutsideGrid(position: Position): boolean {
    return position.x < 0 || position.x > this.width || position.y < 0 || position.y > this.height;
  }
}
