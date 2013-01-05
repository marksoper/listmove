
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
  var initialData = {
    left: ["horse", "cat", "dog"],
    right: ["mouse", "bird", "squirrel"]
  };
  var lists = {};
  for (var listName in initialData) {
    lists[listName] = new list.List(listName, document.getElementById(listName), initialData[listName]);
    lists[listName].render();
  }
};

//
// use window.onload in favor of window.addEventListener
// because cross browser support more important than being able to 
// attach multiple event handlers
//
window.onload = main;




