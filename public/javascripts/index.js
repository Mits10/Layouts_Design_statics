/* Raw Javascript */

function addClass() {
           var v = document.getElementById("p");
           v.className += "addCSS";
}
function moodChange() {
  var v = document.getElementById("body");
  v.style.backgroundColor = 'rgb(65, 52, 52)';
}

function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}

function colorElementRed(id) {
  var el = document.getElementById(id);
  el.style.color = "red";
}

/*
var sheet = document.createElement('style')
sheet.innerHTML = "div {border: 2px solid black; background-color: blue;}";
document.body.appendChild(sheet);
*/

var sheetToBeRemoved = document.getElementById('styleSheetId');
var sheetParent = sheetToBeRemoved.parentNode;
sheetParent.removeChild(sheetToBeRemoved);

/* Jquery Examples */
$(document).ready(function()
{
  $('h1').click(function()
  {
    $(this).css('background-color','0000');
  })
});
