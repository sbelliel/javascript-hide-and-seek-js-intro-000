function getFirstSelector(selector) {
var element = document.querySelector(selector)
return element
}

function nestedTarget() {
var element = document.querySelector("div.target")
return element
}

function deepestChild() {
  const lis = document
    .getElementById("app")
    .querySelectorAll("ul.ranked-list li");

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (i + 1).toString();
  }
}

function increaseRankBy(n) {
var element = document.querySelectorAll(".ranked-list")
var firstlist = element[0];
var children = firstlist.children;
var secondlist = element[1];
var childrens = secondlist.children
var dog = [];
var cat = [];
for (var i = 0; i < children.length; i++) { //first list
  children[i].innerHTML = parseInt(children[i]) + n
}
return children

for (var i = 0; i < childrens.length; i++) { //second list
  cat[i].innerHTML = parseInt(childrens[i]) + n
}
return cat

}
