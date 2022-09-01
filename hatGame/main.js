const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field){
    this._field = field
    this._x = 0
    this._y = 0 
  }
  print(){
    for(let i = 0; i < this._field.length; i++){
      console.log(this._field[i].join(''))
    }   
  }
  calculatePosition(input){
    switch (input){
      case "L":
        this._y--;
        break;
      case "R":
        this._y++;
        break;
      case "U":
        this._x--;
        break;
      case "D":
        this._x++;
      break;
      default:
        console.log("not a valid input")
    }
    if(this._field[this._x][this._y] === "O"){
      return "You lose"
    }else if(this._field[this._x][this._y] === "^"){
      return "You win"
    }else {
      this._field[this._x][this._y] = "*"
    }
  }

}
const myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);
myField.print()
const name = prompt('What is your input?');
myField.calculatePosition(name)
let result;
while(!result){
  const name = prompt('What is your input?');
  result = myField.calculatePosition(name)
  myField.print()
  console.log(result)
}



