export interface IRobot {
  moveForward(): void;
  moveLeft(): void;
  moveRight(): void;
  getPosition(): string;
}
