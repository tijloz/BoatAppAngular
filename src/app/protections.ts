export class Protection {
  id: number;
  name: string;
  state: number;

  constructor(id: number, name: string, state: number) {
    this.id = id;
    this.name = name;
    this.state = state;
  }
}
