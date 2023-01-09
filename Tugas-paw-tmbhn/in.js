// Set the variable to add the value
var addValueNumber = 0;
 
// Create a function to add the value
function addValue() {
  addValueNumber++;
  document.getElementById("value").innerHTML = addValueNumber;
}
 
// Add the value when the media screen is swiped up
document.getElementById("mediascreen").addEventListener("mouseover", addValue);
