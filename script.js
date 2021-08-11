//fahrenheit to celcsious
var fahrenheit = parseFloat(prompt("Enter fahrenheit Number: "));

var CelcsiousFormula = (fahrenheit - 32) * 5/9;

var CelcsiousResult = Number(CelcsiousFormula.toPrecision(6));

document.write("Your FarhenHeit to Celcsious Number is: " + CelcsiousResult + "<br/> <br/>");


//celcsious to fahrenheit

var celNum = parseFloat(prompt("Enter Your Celcsious Number: "));

var fahrFormula = (celNum * 9/5) + 32;

var fahrnheitResult = Number(fahrFormula.toPrecision(6));

document.write("Your Celcsious to FarhenHeit Result is: " + fahrnheitResult + "<br/> <br/>");




//Kelvin to celcsious
var kelvinNum = parseFloat(prompt("Enter Kelvin Number: "));

var kelToCelFormula = kelvinNum - 273.15

var kelToCelResult = Number(kelToCelFormula.toPrecision(6));

document.write("Your Kelvin to Celcsious Result is: " + kelToCelResult);














