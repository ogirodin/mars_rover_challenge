
const input = `4 8
(2, 3, E) LFRFF
(0, 2, N) FFLFRFF`;

function main(input: string): void {
  // first of all we have to parse the input
  const lines = input.split('\n');
  // first line is the grid size
  const [gridSizeX, gridSizeY] = lines[0].split(' ').map(Number);

  // next lines are the robots
  const robots = lines.slice(1).map((line) => {
    const [position, commands] = line.split(') ');
    const [x, y, orientation] = position.replace('(', '').split(', ');
    return {x, y, orientation, commands};
  });

  console.log(JSON.stringify(robots));
  console.log(gridSizeX, gridSizeY);
}

main(input);
