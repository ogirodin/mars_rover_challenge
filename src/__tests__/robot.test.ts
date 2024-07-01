import { Robot } from '../robot';
import {Grid} from '../grid';
import {Command} from '../command';

describe('testing robot mouvments', () => {
  beforeEach(() => {
    Grid.resetInstance(); // Ajoutez cette ligne pour réinitialiser le singleton avant chaque test
  });
  test('Robot should move forward', () => {
    Grid.getInstance(5, 5);
    const robot = new Robot(0, 0, 'N');
    const command = new Command('F');

    command.execute(robot);

    expect(robot.getPosition()).toBe('(0, 1, N)');
  });
  test('Robot should turn right', () => {
    Grid.getInstance(0, 1);
    const robot = new Robot(0, 0, 'N');
    const command = new Command('R');

    command.execute(robot);

    expect(robot.getPosition()).toBe('(0, 0, E)');
  });
  test('Robot should turn left', () => {
    Grid.getInstance(0, 1);
    const robot = new Robot(0, 0, 'N');
    const command = new Command('L');

    command.execute(robot);

    expect(robot.getPosition()).toBe('(0, 0, W)');
  });
  test('Robot should turn right and move forward', () => {
    Grid.getInstance(2, 2);
    const robot = new Robot(0, 0, 'N');
    const command = new Command('RF');

    command.execute(robot);

    expect(robot.getPosition()).toBe('(1, 0, E)');
  });
  test('Robot should go out of grid and be lost', () => {
    Grid.getInstance(2, 2);
    const robot = new Robot(0, 0, 'N');
    const command = new Command('LF');

    command.execute(robot);

    expect(robot.getPosition()).toBe('(0, 0, W) LOST');
  });
})
