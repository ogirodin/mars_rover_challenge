import { Robot } from '../robot';
import {Grid} from '../grid';
import {Command} from '../command';

describe('testing robot mouvments', () => {
  Grid.getInstance(5, 5);
  test('Robot should move forward', () => {
    const robot = new Robot(0, 0, 'N');
    const command = new Command('F');

    command.execute(robot);

    expect(robot.getPosition()).toBe('(0, 1, N)');
  });
})
