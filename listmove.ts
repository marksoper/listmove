
//
// Typescript example project
// Mark Soper
//

//
// satisfy lint by declaring globals to be used
//
declare var Element;

import list = module("./list")

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
};

//
// use window.onload in favor of window.addEventListener
// because cross browser support more important than being able to 
// attach multiple event handlers
//
window.onload = main;



