let command = "";
let newToDo = "";
let indexElementToDelete = undefined;
let appIsLive = true;
const toDoList = [];
while (appIsLive) {
  command = prompt("Enter a valid command: ");
  switch (command) {
    case "new":
      newToDo = prompt("Write what you want to do: ");
      toDoList.push(newToDo);
      console.log(newToDo);
      break;
    case "list":
      console.log("************");
      for (let index = 0; index < toDoList.length; index++) {
        const toDo = toDoList[index];
        console.log(`${index}: ${toDo}`);
      }
      console.log("************");
      break;
    case "delete":
      if (toDoList !== []) {
        indexElementToDelete = prompt(
          "Write the number of the thing you want to delete: "
        );
        console.log(indexElementToDelete);
        console.log(`You deleted ${toDoList.splice(indexElementToDelete, 1)}`);
      } else {
        console.log(
          "You don't have anything to do. Add  something to your list"
        );
      }
      break;
    case "quit":
      appIsLive = false;
      console.log("You quit the app. GoodBye!");
      break;
    default:
      console.log("Please insert a valid command.");
      break;
  }
}
