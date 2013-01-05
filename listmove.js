var list = require("./list")
var main = function () {
    var leftListData = [
        "horse", 
        "cat", 
        "dog"
    ];
    var rightListData = [
        "mouse", 
        "bird", 
        "squirrel"
    ];
    var leftEl = document.getElementById("leftList");
    var rightEl = document.getElementById("rightList");
    var leftList = new list.List(leftListData, leftEl);
    var rightList = new list.List(rightListData, rightEl);
};
window.onload = main;
