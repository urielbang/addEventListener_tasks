//1
document.body.innerHTML += `<h1 id="myH1"> hello world!</h1>`;
document.getElementById("myH1").addEventListener("mouseover", function () {
  alert("welcome!");
});

//2
document.body.innerHTML += `<div id="myDiv">this is the div!</div>`;
document.getElementById("myDiv").addEventListener("mouseover", function () {
  var date = new Date();
  console.log(`houres:${date.getHours()} minutes: ${date.getMinutes()}`);
});

//3
document.body.innerHTML += `<h3 id="myH3">this is my h3 !</h3>`;
document.getElementById("myH3").addEventListener("mouseover", function () {
  document.getElementById("myH3").style.color = "blue";
});

//4
// document.body.innerHTML += `<button id="btn">press here!</button>`;
// document.body.innerHTML += `<p id="myP">press here to grow up the button!</p>`;
// document.getElementById("myP").addEventListener("click", function () {
//   document.getElementById("btn").style = "width:200px;height:200px;";
// });
