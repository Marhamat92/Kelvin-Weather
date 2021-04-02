//forecast is 293 kelvin today,it has to be constant
const kelvin=250;

//celsius is 273 degree less than kelvin,it has to be constant
const celsius=kelvin - 273;

//to calculate fahrenheit,needs to give new value so use "let"
let fahrenheit=celsius * (9/5) + 32;

//fahrenheit gets often decimal number thats why we need to round it
fahrenheit=Math.floor(fahrenheit);

//log it to console
console.log("The temperature is " + fahrenheit + " degrees Fahrenheit.");