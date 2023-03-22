//EXAMINE THE DOCUMENT OBJECT//

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 4444;
// console.log(document.all);
// console.log(document.all[10]);

// document.all[10].textContent = "hello";
// console.log(document.forms);
// console.log(document.images);

// console.log(document.getElementById("header-title"));
// var headerTitle = document.getElementById("header-title");
// var header = document.getElementById("main-header");
// headerTitle.textContent = "vijay";
// headerTitle.style.border = "2px solid white";

// var items = document.getElementsByClassName("list-group-item");
// console.log(items);
// items[1].style.fontWeight = "bold";

// Gives ERROR
// items.style.backgroundColor = "blue";

// for (i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "gray";
// }

// var li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// li[3].style.backgroundColor = "red";

// var input = document.querySelector("input");
// input.placeholder = "Add Item Here";

// var lastItem = document.querySelector(".list-group-item:last-child");
// console.log(lastItem);

// var secondItem = document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.color = "coral";

// var titles = document.querySelectorAll(".title");
// console.log(titles);

// titles[1].style.color = "blue";

// var odd = document.querySelectorAll("li:nth-child(odd)");
// var even = document.querySelectorAll("li:nth-child(even)");
// // odd.style.color = "pink";

// for (let i = 0; i < odd.length; i++) {
//   odd[i].style.color = "red";
//   even[i].style.color = "orange";
// }

//parentNode
// var itemList = document.querySelector("#items");

// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "purple";

// console.log(itemList.parentElement);

//childNode
// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);

///////////////////////////////////////////////////////////
//////////////////CREATING NEW DIV //////////////////////

// var newDiv = document.createElement("div");
// console.log(newDiv);

// newDiv.className = "hello";
// newDiv.id = "hi";
// newDiv.setAttribute("title", "hey");

// var newDivText = document.createTextNode("Hello Family");
// newDiv.appendChild(newDivText);
// console.log(newDivText);

// var container = document.querySelector("header .container");
// var h1 = document.querySelector("header h1");
// console.log(newDiv);

// container.insertBefore(newDiv, h1);

///////////////////////////////////////////////////////////
//////////////////////EVENTS///////////////////////////////

// var button = document
//   .getElementById("button")
//   .addEventListener("click", buttonClick);

// function buttonClick(e) {
//   // console.log("Button clicked");
//   // document.getElementById("header-title").textContent = "title";
//   // document.querySelector("#main").style.backgroundColor = "orange";
// console.log(e);
// console.log(e.target);
// console.log(e.target.id);
// console.log(e.target.className);
// console.log(e.target.classList);
// var output = document.getElementById("output");
// output.innerHTML = "<h3>" + e.target.id + "</h3>";
//   // console.log(e.type);
//   // console.log(e.clientX);
//   // console.log(e.clientY);
//   // console.log(e.offsetX);
//   // console.log(e.offsetY);
//   // console.log(e.altKey);
//   // console.log(e.ctrlKey);
//   // console.log(e.shiftKey);
// }

// var button = document
//   .getElementById("button")
//   .addEventListener("click", runEvent);

// var box = document.getElementById("box");

// box.addEventListener("click", runEvent);
// box.addEventListener("mouseenter", runEvent);
// box.addEventListener("mouseover", runEvent);
// box.addEventListener("mouseleave", runEvent);
// box.addEventListener("mouseout", runEvent);

// box.addEventListener("mousemove", runEvent);

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector("form");

// itemInput.addEventListener("keydown", runEvent);

// itemInput.addEventListener("focus", runEvent);
// itemInput.addEventListener("blur", runEvent);

// itemInput.addEventListener("cut", runEvent);
// itemInput.addEventListener("paste", runEvent);

// itemInput.addEventListener("input", runEvent);

form.addEventListener("submit", runEvent);

function runEvent(e) {
  e.preventDefault();
  console.log("EVENT TYPE:" + e.type);
  // document.body.style.display = "none";

  // console.log(e.target.value);

  // document.getElementById("output").innerHTML =
  //   "<h3>" + e.target.value + "</h3>";

  // output.innerHTML =
  //   "<h3>MouseX: " + e.offsetX + " </h3><h3>MouseY: " + e.offsetY + "</h3>";

  // document.body.style.backgroundColor =
  //   "rgb(" + e.offsetX + "," + e.offsetY + ",40)";
}

var select = document
  .querySelector("select")
  .addEventListener("change", runEvent);
