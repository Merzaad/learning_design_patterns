class DoCommand {
  execute() {
    console.log("do");
  }
}
class UndoCommand {
  execute() {
    console.log("undo");
  }
}

function run(command) {
  command.execute();
}

const doCommand = new DoCommand();
const undoCommand = new UndoCommand();

run(doCommand);
run(undoCommand);
