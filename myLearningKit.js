/*Problem 1 Bilal
*/
function problem1() {
  document.getElementById("problem").innerHTML =
    "Devise an algorithm to receive a postive number and separe its digits.";

  document.getElementById("flowchart").setAttribute("src", "images/problem1fc.jpg");

  document.getElementById("flowchart").style.display = "none";

  document.getElementById("js").setAttribute("src", "images/problem1.png");
  document.getElementById("js").style.display = "none";


  document
    .getElementById("another")
    .setAttribute("src", "images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display = "none";

  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;
}

function problem2() {
  document.getElementById("problem").innerHTML =
    "Devise an algorithm to receive a  postive number and determine the number of 7’s in it. ";

  document.getElementById("flowchart").setAttribute("src", "images/problem2fc.jpg");

  document.getElementById("flowchart").style.display = "none";

  document.getElementById("js").setAttribute("src", "images/problem2.png");
  document.getElementById("js").style.display = "none";


  document
    .getElementById("another")
    .setAttribute("src", "images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display = "none";

  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;
}

function problem3() {
  document.getElementById("problem").innerHTML =
    "Devise an algorithm to receive a positve number and create triangle nested loops corresponding with imput.";

  document.getElementById("flowchart").setAttribute("src", "images/problem3fc.jpg");

  document.getElementById("flowchart").style.display = "none";

  document.getElementById("js").setAttribute("src", "images/problem3.png");
  document.getElementById("js").style.display = "none";


  document
    .getElementById("another")
    .setAttribute("src", "images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display = "none";

  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;
}

function problem4() {
  document.getElementById("problem").innerHTML =
    "Devise an algorithm to receive three numbers of a quadratic equation and output info about the roots.";

  document.getElementById("flowchart").setAttribute("src", "images/problem4fc.jpg");

  document.getElementById("flowchart").style.display = "none";

  document.getElementById("js").setAttribute("src", "images/problem4.png");
  document.getElementById("js").style.display = "none";


  document
    .getElementById("another")
    .setAttribute("src", "images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display = "none";

  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;
}

function problem5() {
  document.getElementById("problem").innerHTML =
    "Devise an algorithm to receive 8 numbers and determine whether the first 4 imputs are equal to the second 4 imputs.";

  document.getElementById("flowchart").setAttribute("src", "images/problem5fc.jpg");

  document.getElementById("flowchart").style.display = "none";

  document.getElementById("js").setAttribute("src", "images/problem5.png");
  document.getElementById("js").style.display = "none";


  document
    .getElementById("another")
    .setAttribute("src", "images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display = "none";

  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;
}

function problem7() {
  document.getElementById("problem").innerHTML =
    "Devise an algorithm to receive a number and determine all prime numbers that are less or equal to it.";

    document.getElementById("flowchart").setAttribute("src", "images/problem7fc.jpg");

    document.getElementById("flowchart").style.display = "none";
  
    document.getElementById("js").setAttribute("src", "images/problem7.png");
    document.getElementById("js").style.display = "none";
  
  
    document
      .getElementById("another")
      .setAttribute("src", "images/jujeh/jujeh2.jpg");
    document.getElementById("another").style.display = "none";
  
    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
}


function problem8() {
  document.getElementById("problem").innerHTML =
    "Devise an algorithm to receive a number and determine all prime numbers that include a 7 that are less or equal to it.";

    document.getElementById("flowchart").setAttribute("src", "images/problem8fc.jpg");

    document.getElementById("flowchart").style.display = "none";
  
    document.getElementById("js").setAttribute("src", "images/problem8.png");
    document.getElementById("js").style.display = "none";
  
  
    document
      .getElementById("another")
      .setAttribute("src", "images/jujeh/jujeh2.jpg");
    document.getElementById("another").style.display = "none";
  
    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
}

function problem9() {
  document.getElementById("problem").innerHTML =
    "Devise an algorithm to receive a base and height of a triangle and calculate its area.";

    document.getElementById("flowchart").setAttribute("src", "images/problem9fc.jpg");

    document.getElementById("flowchart").style.display = "none";
  
    document.getElementById("js").setAttribute("src", "images/problem9.png");
    document.getElementById("js").style.display = "none";
  
  
    document
      .getElementById("another")
      .setAttribute("src", "images/jujeh/jujeh2.jpg");
    document.getElementById("another").style.display = "none";
  
    document.getElementById("check1").checked = false;
    document.getElementById("check2").checked = false;
}


/*----------------------------------------------------------------------------------------------------------------------------*/

/* 
====
Problem 15
====
*/
function problem15() {
  document.getElementById("problem").innerHTML =
    "Devise an algorithm that receives a question and then outputs a random fortune.";

  document
    .getElementById("flowchart")
    .setAttribute("src", "images/");

  document.getElementById("flowchart").style.display = "none";

  
  document.getElementById("js").setAttribute("src", "images/problem15.png");
  document.getElementById("js").style.display = "none";

  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;
}



function checkUncheck1() {
  if (document.getElementById("check1").checked == true) {
    document.getElementById("flowchart").style.display = "inline";
    
  } else {
    document.getElementById("flowchart").style.display = "none";
  }
}

function checkUncheck2() {
  if (document.getElementById("check2").checked == true) {
    document.getElementById("js").style.display = "inline";
  } else {
    document.getElementById("js").style.display = "none";
  }
}

function zoomIn() {
  document.getElementById("flowchart").style.width = "200%";
}

function zoomOut() {
  document.getElementById("flowchart").style.width = "100%";
}

/* 
====
Problem 16
=====
 */
function problem16() {
  document.getElementById("problem").innerHTML =
    "Devise an algorithm of rock, paper, scissors game. It should receive an input from user, generate a random choice and then determine the winner";


  document
    .getElementById("flowchart")
    .setAttribute("src", "images/jujeh/jujehDesign.jpg");

  document.getElementById("flowchart").style.display = "none";

  document.getElementById("js").setAttribute("src", "images/problem16.png");
  document.getElementById("js").style.display = "none";


  document
    .getElementById("another")
    .setAttribute("src", "images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display = "none";

  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;
}



function checkUncheck1() {
  if (document.getElementById("check1").checked == true) {
    document.getElementById("flowchart").style.display = "inline";
  } else {
    document.getElementById("flowchart").style.display = "none";
  }
}

function checkUncheck2() {
  if (document.getElementById("check2").checked == true) {
    document.getElementById("js").style.display = "inline";
  } else {
    document.getElementById("js").style.display = "none";
  }
}

/* 
====
Problem 17
=====
 */
function problem17() {
  document.getElementById("problem").innerHTML =
    "Devise an algorithm to receive a number and ouput the sum of its digits";


  document.getElementById("flowchart").setAttribute("src", "images/problem17fc.jpeg");

  document.getElementById("flowchart").style.display = "none";

  document.getElementById("js").setAttribute("src", "images/problem17.png");
  document.getElementById("js").style.display = "none";


  document
    .getElementById("another")
    .setAttribute("src", "images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display = "none";

  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;
}



function checkUncheck1() {
  if (document.getElementById("check1").checked == true) {
    document.getElementById("flowchart").style.display = "inline";
  } else {
    document.getElementById("flowchart").style.display = "none";
  }
}

function checkUncheck2() {
  if (document.getElementById("check2").checked == true) {
    document.getElementById("js").style.display = "inline";
  } else {
    document.getElementById("js").style.display = "none";
  }
}

/* 
====
Problem 18
=====
 */
function problem18() {
  document.getElementById("problem").innerHTML =
    "Devise an algorithm to receive a number and ouput its factorial";


  document.getElementById("flowchart").setAttribute("src", "images/problem18fc.jpeg");

  document.getElementById("flowchart").style.display = "none";

  document.getElementById("js").setAttribute("src", "images/problem18.png");
  document.getElementById("js").style.display = "none";


  document
    .getElementById("another")
    .setAttribute("src", "images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display = "none";

  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;
}



function checkUncheck1() {
  if (document.getElementById("check1").checked == true) {
    document.getElementById("flowchart").style.display = "inline";
  } else {
    document.getElementById("flowchart").style.display = "none";
  }
}

function checkUncheck2() {
  if (document.getElementById("check2").checked == true) {
    document.getElementById("js").style.display = "inline";
  } else {
    document.getElementById("js").style.display = "none";
  }
}

/* 
====
Problem 19
=====
 */
function problem19() {
  document.getElementById("problem").innerHTML =
    "Devise an algorithm to receive a number and output the fibonacci sequence up to the number inputted";


  document.getElementById("flowchart").setAttribute("src", "images/problem19fc.jpeg");

  document.getElementById("flowchart").style.display = "none";

  document.getElementById("js").setAttribute("src", "images/problem19.png");
  document.getElementById("js").style.display = "none";


  document
    .getElementById("another")
    .setAttribute("src", "images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display = "none";

  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;
}



function checkUncheck1() {
  if (document.getElementById("check1").checked == true) {
    document.getElementById("flowchart").style.display = "inline";
  } else {
    document.getElementById("flowchart").style.display = "none";
  }
}

function checkUncheck2() {
  if (document.getElementById("check2").checked == true) {
    document.getElementById("js").style.display = "inline";
  } else {
    document.getElementById("js").style.display = "none";
  }
}

/* 
====
Problem 20
=====
 */
function problem20() {
  document.getElementById("problem").innerHTML =
    "Devise an algorithm to receive a number and output whether if it is equal to its reverse or not";


  document.getElementById("flowchart").setAttribute("src", "images/problem20fc.jpeg");

  document.getElementById("flowchart").style.display = "none";

  document.getElementById("js").setAttribute("src", "images/problem20.png");
  document.getElementById("js").style.display = "none";


  document
    .getElementById("another")
    .setAttribute("src", "images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display = "none";

  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;
}



function checkUncheck1() {
  if (document.getElementById("check1").checked == true) {
    document.getElementById("flowchart").style.display = "inline";
  } else {
    document.getElementById("flowchart").style.display = "none";
  }
}

function checkUncheck2() {
  if (document.getElementById("check2").checked == true) {
    document.getElementById("js").style.display = "inline";
  } else {
    document.getElementById("js").style.display = "none";
  }
}

/* 
====
Problem 21
=====
 */
function problem21() {
  document.getElementById("problem").innerHTML =
    "Devise an algorithm to receive three numbers of a quadratic equation and output the number of its roots";


  document.getElementById("flowchart").setAttribute("src", "images/problem21fc.png");

  document.getElementById("flowchart").style.display = "none";

  document.getElementById("js").setAttribute("src", "images/problem21.png");
  document.getElementById("js").style.display = "none";


  document
    .getElementById("another")
    .setAttribute("src", "images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display = "none";

  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;
}



function checkUncheck1() {
  if (document.getElementById("check1").checked == true) {
    document.getElementById("flowchart").style.display = "inline";
  } else {
    document.getElementById("flowchart").style.display = "none";
  }
}

function checkUncheck2() {
  if (document.getElementById("check2").checked == true) {
    document.getElementById("js").style.display = "inline";
  } else {
    document.getElementById("js").style.display = "none";
  }
}

/* 
====
Problem 22
=====
 */
function problem22() {
  document.getElementById("problem").innerHTML =
    "Devise an algorithm to receive the width and height a rectangle then output it's perimeter.";


  document.getElementById("flowchart").setAttribute("src", "images/problem22fc.png");

  document.getElementById("flowchart").style.display = "none";

  document.getElementById("js").setAttribute("src", "images/problem22.png");
  document.getElementById("js").style.display = "none";


  document
    .getElementById("another")
    .setAttribute("src", "images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display = "none";

  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;
}



function checkUncheck1() {
  if (document.getElementById("check1").checked == true) {
    document.getElementById("flowchart").style.display = "inline";
  } else {
    document.getElementById("flowchart").style.display = "none";
  }
}

function checkUncheck2() {
  if (document.getElementById("check2").checked == true) {
    document.getElementById("js").style.display = "inline";
  } else {
    document.getElementById("js").style.display = "none";
  }
}

/* 
====
Problem 23
=====
 */
function problem23() {
  document.getElementById("problem").innerHTML =
    "Devise an algorithm to receive the semi-axes of an ellipsoid and then output its volume.";


  document.getElementById("flowchart").setAttribute("src", "images/problem23fc.png");

  document.getElementById("flowchart").style.display = "none";

  document.getElementById("js").setAttribute("src", "images/problem23.png");
  document.getElementById("js").style.display = "none";


  document
    .getElementById("another")
    .setAttribute("src", "images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display = "none";

  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;
}



function checkUncheck1() {
  if (document.getElementById("check1").checked == true) {
    document.getElementById("flowchart").style.display = "inline";
  } else {
    document.getElementById("flowchart").style.display = "none";
  }
}

function checkUncheck2() {
  if (document.getElementById("check2").checked == true) {
    document.getElementById("js").style.display = "inline";
  } else {
    document.getElementById("js").style.display = "none";
  }
}

/* 
====
Problem 24
=====
 */
function problem24() {
  document.getElementById("problem").innerHTML =
    "Devise an algorithm to receive a grade out of hundred and then output the numeral grade in letter grade form";


  document.getElementById("flowchart").setAttribute("src", "images/problem24fc.png");

  document.getElementById("flowchart").style.display = "none";

  document.getElementById("js").setAttribute("src", "images/problem24.png");
  document.getElementById("js").style.display = "none";


  document
    .getElementById("another")
    .setAttribute("src", "images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display = "none";

  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;
}



function checkUncheck1() {
  if (document.getElementById("check1").checked == true) {
    document.getElementById("flowchart").style.display = "inline";
  } else {
    document.getElementById("flowchart").style.display = "none";
  }
}

function checkUncheck2() {
  if (document.getElementById("check2").checked == true) {
    document.getElementById("js").style.display = "inline";
  } else {
    document.getElementById("js").style.display = "none";
  }
}

/* 
====
Problem 25
=====
 */
function problem25() {
  document.getElementById("problem").innerHTML =
    "Devise an algorithm to receive a number and output whether it is a positive or negative number and be disabled if the number is zero.";


  document.getElementById("flowchart").setAttribute("src", "images/problem25fc.png");

  document.getElementById("flowchart").style.display = "none";

  document.getElementById("js").setAttribute("src", "images/problem25.png");
  document.getElementById("js").style.display = "none";


  document
    .getElementById("another")
    .setAttribute("src", "images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display = "none";

  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;
}



function checkUncheck1() {
  if (document.getElementById("check1").checked == true) {
    document.getElementById("flowchart").style.display = "inline";
  } else {
    document.getElementById("flowchart").style.display = "none";
  }
}

function checkUncheck2() {
  if (document.getElementById("check2").checked == true) {
    document.getElementById("js").style.display = "inline";
  } else {
    document.getElementById("js").style.display = "none";
  }
}

/* 
====
Problem 26
=====
 */
function problem26() {
  document.getElementById("problem").innerHTML =
    "Devise an algorithm to receive multiple numbers and then output the count of positive and negative numbers.";

  document.getElementById("flowchart").setAttribute("src", "images/problem26fc.png");

  document.getElementById("flowchart").style.display = "none";

  document.getElementById("js").setAttribute("src", "images/problem26.png");
  document.getElementById("js").style.display = "none";


  document
    .getElementById("another")
    .setAttribute("src", "images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display = "none";

  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;
}



function checkUncheck1() {
  if (document.getElementById("check1").checked == true) {
    document.getElementById("flowchart").style.display = "inline";
  } else {
    document.getElementById("flowchart").style.display = "none";
  }
}

function checkUncheck2() {
  if (document.getElementById("check2").checked == true) {
    document.getElementById("js").style.display = "inline";
  } else {
    document.getElementById("js").style.display = "none";
  }
}

/* 
====
Problem 27
=====
 */
function problem27() {
  document.getElementById("problem").innerHTML =
    "Devise an algorithm to receive a number and output whether if it is divisble by 6 or not";

  document.getElementById("flowchart").setAttribute("src", "images/problem27fc.png");

  document.getElementById("flowchart").style.display = "none";

  document.getElementById("js").setAttribute("src", "images/problem27.png");
  document.getElementById("js").style.display = "none";


  document
    .getElementById("another")
    .setAttribute("src", "images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display = "none";

  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;
}



function checkUncheck1() {
  if (document.getElementById("check1").checked == true) {
    document.getElementById("flowchart").style.display = "inline";
  } else {
    document.getElementById("flowchart").style.display = "none";
  }
}

function checkUncheck2() {
  if (document.getElementById("check2").checked == true) {
    document.getElementById("js").style.display = "inline";
  } else {
    document.getElementById("js").style.display = "none";
  }
}

/* 
====
Problem 28
=====
 */
function problem28() {
  document.getElementById("problem").innerHTML =
    "Devise an algorithm to receive the radius of a circle then ouput its area.";

  document.getElementById("flowchart").setAttribute("src", "");

  document.getElementById("flowchart").style.display = "none";

  document.getElementById("js").setAttribute("src", "images/problem28.png");
  document.getElementById("js").style.display = "none";


  document
    .getElementById("another")
    .setAttribute("src", "images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display = "none";

  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;
}



function checkUncheck1() {
  if (document.getElementById("check1").checked == true) {
    document.getElementById("flowchart").style.display = "inline";
  } else {
    document.getElementById("flowchart").style.display = "none";
  }
}

function checkUncheck2() {
  if (document.getElementById("check2").checked == true) {
    document.getElementById("js").style.display = "inline";
  } else {
    document.getElementById("js").style.display = "none";
  }
}

/* 
====
Problem 29
=====
 */
function problem29() {
  document.getElementById("problem").innerHTML =
    "Devise an algorithm to receive a number and return whether if it has a digit 8 or not";

  document.getElementById("flowchart").setAttribute("src", "images/problem29fc.png");

  document.getElementById("flowchart").style.display = "none";

  document.getElementById("js").setAttribute("src", "images/problem29.png");
  document.getElementById("js").style.display = "none";


  document
    .getElementById("another")
    .setAttribute("src", "images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display = "none";

  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;
}



function checkUncheck1() {
  if (document.getElementById("check1").checked == true) {
    document.getElementById("flowchart").style.display = "inline";
  } else {
    document.getElementById("flowchart").style.display = "none";
  }
}

function checkUncheck2() {
  if (document.getElementById("check2").checked == true) {
    document.getElementById("js").style.display = "inline";
  } else {
    document.getElementById("js").style.display = "none";
  }
}

/* 
====
Problem 30
=====
 */
function problem30() {
  document.getElementById("problem").innerHTML =
    "Devise an algorithm to flip a coin by getting a random number. If the number is below 0.5 set the value to tails if not set it heads. ";

  document.getElementById("flowchart").setAttribute("src", "images.png");

  document.getElementById("flowchart").style.display = "none";

  document.getElementById("js").setAttribute("src", "images/problem30.png");
  document.getElementById("js").style.display = "none";


  document
    .getElementById("another")
    .setAttribute("src", "images/jujeh/jujeh2.jpg");
  document.getElementById("another").style.display = "none";

  document.getElementById("check1").checked = false;
  document.getElementById("check2").checked = false;
}



function checkUncheck1() {
  if (document.getElementById("check1").checked == true) {
    document.getElementById("flowchart").style.display = "inline";
  } else {
    document.getElementById("flowchart").style.display = "none";
  }
}

function checkUncheck2() {
  if (document.getElementById("check2").checked == true) {
    document.getElementById("js").style.display = "inline";
  } else {
    document.getElementById("js").style.display = "none";
  }
}








































