import { MarsGrid } from '../application/MarsGrid';
import { MarsRover } from '../domain/MarsRover';
import { Orientation } from '../domain/Orientation';

describe('MarsRover integration', () => {
  test('should execute commands correctly', () => {
    const grid = new MarsGrid(4, 8);

    const rover1 = new MarsRover({ x: 2, y: 3, orientation: Orientation.E });
    const commands1 = 'LFRFF';
    for (const command of commands1) {
      rover1.executeCommand(command, grid);
    }
    expect(rover1.getStatus()).toBe('(4, 4, E)');

    const rover2 = new MarsRover({ x: 0, y: 2, orientation: Orientation.N });
    const commands2 = 'FFLFRFF';
    for (const command of commands2) {
      rover2.executeCommand(command, grid);
    }
    expect(rover2.getStatus()).toBe('(0, 4, W) LOST');
  });
});
