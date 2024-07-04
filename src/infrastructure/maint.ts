// Input parsing and execution
import {MarsGrid} from '../application/MarsGrid';
import {MarsRover} from '../domain/MarsRover';
import {Orientation} from '../domain/Orientation';

const input = `
4 8
(2, 3, E) LFRFF
(0, 2, N) FFLFRFF
`.trim();

const lines = input.split('\n');
const [gridWidth, gridHeight] = lines[0].split(' ').map(Number);
const grid = new MarsGrid(gridWidth, gridHeight);

const rovers: MarsRover[] = [];

for (let i = 1; i < lines.length; i++) {
  const [initialState, commands] = lines[i].split(') ');
  const [x, y, orientation] = initialState.replace('(', '').split(', ');

  const rover = new MarsRover({x: Number(x), y: Number(y), orientation: orientation as Orientation,});

  for (const command of commands) {
    rover.executeCommand(command, grid);
  }

  rovers.push(rover);
}

// Output the final states of the rovers
for (const rover of rovers) {
  console.log(rover.getStatus());
}
