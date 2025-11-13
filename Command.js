class Light {
  turnOn() {
    console.log("💡");
  }
  turnOff() {
    console.log("💤");
  }
}

class Command {
  execute() {}
  undo() {}
}

class TurnOnCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }
  execute() {
    this.light.turnOn();
  }
  undo() {
    this.light.turnOff();
  }
}

class TurnOffCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }
  execute() {
    this.light.turnOff();
  }
  undo() {
    this.light.turnOn();
  }
}

class RemoteControl {
  constructor() {
    this.history = [];
    this.undoStack = [];
  }

  executeCommand(command) {
    command.execute();
    this.history.push(command);
    this.undoStack = [];
  }

  undo() {
    const command = this.history.pop();
    if (command) {
      command.undo();
      this.undoStack.push(command);
    }
  }

  redo() {
    const command = this.undoStack.pop();
    if (command) {
      command.execute();
      this.history.push(command);
    }
  }
}

const light = new Light();
const remote = new RemoteControl();

const turnOn = new TurnOnCommand(light);
const turnOff = new TurnOffCommand(light);

remote.executeCommand(turnOn);
remote.executeCommand(turnOff);
remote.undo();
remote.redo();
