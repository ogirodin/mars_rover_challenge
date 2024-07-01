import {Robot} from './robot';

export class Command {
  constructor(private command: string) {}

  execute(robot: Robot): void {
    this.command.split('').forEach((c) => {
      switch (c) {
        case 'F':
          robot.moveForward();
          break;
        case 'L':
          robot.moveLeft();
          break;
        case 'R':
          robot.moveRight();
          break;
      }
    });
  }
}
