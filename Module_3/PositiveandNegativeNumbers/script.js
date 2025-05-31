function classifyNumber() {
  const input = document.getElementById("numberInput").value;
  const number = parseFloat(input);
  const resultOutput = document.getElementById("resultOutput");

  let result1 = "";
  let result2 = "";

  function posorNeg(number) {
    if (isNaN(number)) {
      result1 = "Please enter a valid number.";
    } else if (number > 0) {
      result1 = "The number is positive ";
    } else if (number < 0) {
      result1 = "The number is negative ";
    } else {
      result1 = "The number is zero.";
    }
  }

  function evenorOdd(number) {
    if (number === 0) {
            return;
    } else if (Math.abs(number) % 2 === 0) {
    result2 = "and even.";
    } else if (Math.abs(number) % 2 === 1) {
    result2 = "and odd.";
    }
    else {
        return;
    }
    
  }


  posorNeg(number);
  evenorOdd(number);

  resultOutput.innerHTML = result1 + " " + result2;
  console.log(result1);
  console.log(result2);
 }
