import { MarsGrid } from '../application/MarsGrid';
import { Position } from '../domain/Position';
import { Orientation } from '../domain/Orientation';

describe('MarsGrid', () => {
  let grid: MarsGrid;

  beforeEach(() => {
    grid = new MarsGrid(4, 8);
  });

  test('should detect position inside grid', () => {
    const position: Position = { x: 2, y: 3, orientation: Orientation.N };
    expect(grid.isOutsideGrid(position)).toBe(false);
  });

  test('should detect position outside grid', () => {
    const position: Position = { x: 5, y: 3, orientation: Orientation.N };
    expect(grid.isOutsideGrid(position)).toBe(true);
  });
});
