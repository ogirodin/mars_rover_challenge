import { MarsRover } from '../domain/MarsRover';
import { MarsGrid } from '../application/MarsGrid';
import { Orientation } from '../domain/Orientation';
import { Position } from '../domain/Position';

describe('MarsRover', () => {
  let grid: MarsGrid;
  let rover: MarsRover;

  beforeEach(() => {
    grid = new MarsGrid(4, 8);
  });

  test('should initialize with correct position and orientation', () => {
    const initialPosition: Position = { x: 2, y: 3, orientation: Orientation.E };
    rover = new MarsRover(initialPosition);

    expect(rover.getStatus()).toBe('(2, 3, E)');
  });

  test('should turn left correctly', () => {
    const initialPosition: Position = { x: 2, y: 3, orientation: Orientation.N };
    rover = new MarsRover(initialPosition);

    rover.executeCommand('L', grid);
    expect(rover.getStatus()).toBe('(2, 3, W)');

    rover.executeCommand('L', grid);
    expect(rover.getStatus()).toBe('(2, 3, S)');
  });

  test('should turn right correctly', () => {
    const initialPosition: Position = { x: 2, y: 3, orientation: Orientation.N };
    rover = new MarsRover(initialPosition);

    rover.executeCommand('R', grid);
    expect(rover.getStatus()).toBe('(2, 3, E)');

    rover.executeCommand('R', grid);
    expect(rover.getStatus()).toBe('(2, 3, S)');
  });

  test('should move forward correctly', () => {
    const initialPosition: Position = { x: 2, y: 3, orientation: Orientation.N };
    rover = new MarsRover(initialPosition);

    rover.executeCommand('F', grid);
    expect(rover.getStatus()).toBe('(2, 4, N)');

    rover.executeCommand('F', grid);
    expect(rover.getStatus()).toBe('(2, 5, N)');
  });

  test('should send unknown command', () => {
    const initialPosition: Position = { x: 2, y: 3, orientation: Orientation.N };
    rover = new MarsRover(initialPosition);

    // test a throw exception error on executeCommand 'P'
    expect(() => rover.executeCommand('P', grid)).toThrowError('Unknown command: P');
  });

  test('should be lost when moving outside the grid', () => {
    const initialPosition: Position = { x: 4, y: 8, orientation: Orientation.N };
    rover = new MarsRover(initialPosition);

    rover.executeCommand('F', grid);
    expect(rover.getStatus()).toBe('(4, 8, N) LOST');
  });
});
