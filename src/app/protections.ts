export class Protection {
  id: number;
  name: string;
  state: string;
  voltage: string;
  current: string;
  temperature: string;

  constructor(id: number, name: string, state: string, voltage: string, current: string, temperature: string) {
    this.id = id;
    this.name = name;
    this.state = state;
    this.voltage = voltage;
    this.current = current;
    this.temperature = temperature;
  }
}
