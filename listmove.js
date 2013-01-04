var List = (function () {
    function List(items) {
        this.items = items || [];
    }
    return List;
})();
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
var leftList = new List(leftListData);
var rightList = new List(rightListData);
var testList = new List([
    1, 
    2, 
    3
]);
