export class Protection {
  id: number;
  name: string;
  state: number;
  voltage: number;
  current: number;

  constructor(id: number, name: string, state: number, voltage: number, current: number) {
    this.id = id;
    this.name = name;
    this.state = state;
    this.voltage = voltage;
    this.current = current;
  }
}
