var list;
(function (list) {
    var List = (function () {
        function List(name, ul, items) {
            this.dragging = false;
            this.name = name;
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
        List.prototype.dragstart = function (evt) {
            this.dragging = true;
            this.ul.style.opacity = "0.5";
            console.log("list " + this.name + " dragstart event: " + evt);
        };
        List.prototype.dragenter = function (evt) {
            if(!this.dragging) {
                console.log("list " + this.name + " dragenter event: " + evt);
                this.ul.style.border = "2px solid #99ff99";
            }
        };
        List.prototype.dragleave = function (evt) {
            if(!this.dragging) {
                console.log("list " + this.name + " dragleave event: " + evt);
                this.ul.style.border = "2px solid #999999";
            }
        };
        List.prototype.dragend = function (evt) {
            this.dragging = false;
            this.ul.style.opacity = "1.0";
            console.log("list " + this.name + " dragend event: " + evt);
        };
        List.prototype.bindEvents = function () {
            var self = this;
            this.ul.addEventListener("dragstart", function (evt) {
                self.dragstart.call(self, evt);
            }, false);
            this.ul.addEventListener("dragenter", function (evt) {
                self.dragenter.call(self, evt);
            }, false);
            this.ul.addEventListener("dragleave", function (evt) {
                self.dragleave.call(self, evt);
            }, false);
            this.ul.addEventListener("dragend", function (evt) {
                self.dragend.call(self, evt);
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
        lists[listName] = new list.List(listName, document.getElementById(listName), initialData[listName]);
        lists[listName].render();
    }
};
window.onload = main;
