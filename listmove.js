var list;
(function (list) {
    var List = (function () {
        function List(items, ul) {
            this.items = items || [];
            this.ul;
        }
        return List;
    })();
    list.List = List;    
})(list || (list = {}));
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
