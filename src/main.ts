import {Robot} from './Robot';
import {TOrientation} from './types';
import {Grid} from './grid';
import {Command} from './command';

// const input = `4 8
// (2, 3, E) LFRFF
// (0, 2, N) FFLFRFF`;

const input = `4 8
(2, 3, N) FLLFR
(1, 0, S) FFRLF`;

function main(input: string): void {
  // first of all we have to parse the input
  const lines = input.split('\n');
  // first line is the grid size
  const [gridSizeX, gridSizeY] = lines[0].split(' ').map(Number);
  Grid.getInstance(gridSizeX, gridSizeY);

  // next lines are the robots
  const robots: Robot[] = lines.slice(1).map((line) => {
    const [position, commandlist] = line.split(') ');
    const command = new Command(commandlist);
    const [x, y, orientation] = position.replace('(', '').split(', ');
    const robot = new Robot(Number(x), Number(y), orientation as TOrientation);
    command.execute(robot);
    return robot;
  });

  robots.map(r => console.log(r.getPosition()));
}

main(input);
