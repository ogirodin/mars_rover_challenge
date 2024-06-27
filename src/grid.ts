
// creating Grid as a singleton
export class Grid {

  private static instance: Grid;
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  static getInstance(width: number, height: number): Grid {
    if (!Grid.instance) {
      Grid.instance = new Grid(width, height);
    }
    return Grid.instance;
  }
}
