var countElement = document.getElementById("counter");
var count = 0;
var counter;
var inputNumber = document.getElementById("inputNumber");

//Function to trigger the counter to count up incrementally from 0 to the input number.
var countNum = () => {
  var number = inputNumber.value; // get the value of the input number

  //check if the input is not a number
  if (checkInputNum(number) == true) {
    alert("Field is empty. Enter a number."); //if true, alerts the user and does not execute the counter
  } else {
    //if false, the counter will start
    counter = setInterval(() => {
      document.getElementById("counter").innerHTML = count;

      //default color for input numbers that are not divisible by 3, 5 or both
      if (count % 3 !== 0 || count % 5 !== 0) {
        defaultColor();
      }

      //Executes a function to highlight if input number is divisible by five
      if (count % 5 == 0) {
        divisibleByFive();
      }
      //Executes a function to highlight if input number is divisible by three
      if (count % 3 == 0) {
        divisibleByThree();
      }

      //Stops the counter if input number matches the count in the counter
      if (number == count) {
        stopCounter();
      }
      count++; //increment from 0
    }, 1000);
  }
};

//Function to check if input is not a number
function checkInputNum(inputNumber) {
  if (isNaN(inputNumber)) {
    return true;
  }
};

//stops the counter
const stopCounter = () => {
  clearInterval(counter);
};

//highlights divisible by five
const divisibleByFive = () => {
  document.getElementById("five").style.backgroundColor = "lightblue";
};

//highlights divisible by three
const divisibleByThree = () => {
  document.getElementById("three").style.backgroundColor = "lightblue";
};

//restarts the counter to zero
const restartCounter = () => {
  count = 0;
  countElement.innerHTML = count;
};

//resets the counter to zero and clears the input field
const resetCounter = () => {
  stopCounter();
  restartCounter();
  defaultColor();
  inputNumber.value = "";
};

//default color
const defaultColor = () => {
  document.getElementById("three").style.backgroundColor = "#ba243d";
  document.getElementById("five").style.backgroundColor = "#ba243d";
};
