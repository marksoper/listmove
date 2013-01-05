var list;
(function (list) {
    var List = (function () {
        function List(ul, items) {
            this.ul = ul;
            this.items = items || [];
        }
        List.prototype.createItemElement = function (item) {
            var element = document.createElement("li");
            return element;
        };
        List.prototype.render = function () {
            var html = "";
            var self = this;
            this.items.forEach(function (item) {
                html = html + self.createItemElement(item);
            });
            this.ul.innerHTML = html;
        };
        return List;
    })();
    list.List = List;    
})(list || (list = {}));
var main = function () {
    var initialData = {
        left: [
            "horse", 
            "cat", 
            "dog"
        ],
        right: [
            "mouse", 
            "bird", 
            "squirrel"
        ]
    };
    var lists = {
    };
    for(var listName in initialData) {
        lists[listName] = new list.List(document.getElementById(listName), initialData[listName]);
        lists[listName].render();
    }
};
window.onload = main;
