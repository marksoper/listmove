var list;
(function (list) {
    var List = (function () {
        function List(ul, items) {
            this.ul = ul;
            this.items = items || [];
            this.render();
            this.bindEvents();
        }
        List.prototype.createItemHTML = function (item) {
            return '<li draggable="true">' + item + '</li>';
        };
        List.prototype.render = function () {
            var html = "";
            var self = this;
            this.items.forEach(function (item) {
                html = html + self.createItemHTML(item);
            });
            this.ul.innerHTML = html;
        };
        List.prototype.dragenter = function (evt) {
            console.log("dragenter event: " + evt);
        };
        List.prototype.dragstart = function (evt) {
            console.log("dragstart event: " + evt);
        };
        List.prototype.bindEvents = function () {
            var self = this;
            this.ul.addEventListener("dragenter", function (evt) {
                self.dragenter.call(self, evt);
            }, false);
            this.ul.addEventListener("dragstart", function (evt) {
                self.dragstart.call(self, evt);
            }, false);
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
