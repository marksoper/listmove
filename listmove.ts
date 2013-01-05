
//
// Typescript example project
// Mark Soper
//

//
// reference the list module that defines the List class
//
///<reference path='list.ts'/>

//
// to be run after DOM is loaded
//
var main = function() {
  var leftListData = ["horse", "cat", "dog"];
  var rightListData = ["mouse", "bird", "squirrel"];
  var leftEl = document.getElementById("leftList");
  var rightEl = document.getElementById("rightList");
  var leftList = new list.List(leftListData, leftEl);
  var rightList = new list.List(rightListData, rightEl);
  leftList.render();
  rightList.render();
};

//
// use window.onload in favor of window.addEventListener
// because cross browser support more important than being able to 
// attach multiple event handlers
//
window.onload = main;




