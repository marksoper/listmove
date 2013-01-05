var list;
(function (list) {
    var List = (function () {
        function List(name, ul, items) {
            this.activeSource = false;
            this.dragActiveSubelement = false;
            this.name = name;
            this.ul = ul;
            this.originalBorder = this.ul.style.border;
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
            this.activeSource = true;
            this.ul.style.opacity = "0.5";
            console.log("list " + this.name + " dragstart event: " + evt);
        };
        List.prototype.dragend = function (evt) {
            evt.preventDefault();
            evt.stopPropagation();
            this.activeSource = false;
            this.ul.style.opacity = "1.0";
            console.log("list " + this.name + " dragend event: " + evt);
        };
        List.prototype.dragenter = function (evt) {
            if(this.activeSource) {
                return;
            }
            evt.preventDefault();
            evt.stopPropagation();
            var tagName = evt.target.tagName.toLowerCase();
            if(tagName === "li") {
                this.dragActiveSubelement = true;
            }
            console.log("-- highlighting ON -- list " + this.name + " dragenter event on tagName: " + evt.target.tagName);
            this.ul.style.border = "2px solid #99ff99";
        };
        List.prototype.dragleave = function (evt) {
            if(this.activeSource) {
                return;
            }
            var tagName = evt.target.tagName.toLowerCase();
            console.log("list " + this.name + " dragleave event on tagName: " + tagName);
            if(tagName === "li") {
                this.dragActiveSubelement = false;
                return;
            }
            if(this.dragActiveSubelement) {
                return;
            }
            evt.preventDefault();
            evt.stopPropagation();
            console.log("-- highlighting OFF -- setting border to " + this.originalBorder);
            this.ul.style.border = this.originalBorder;
        };
        List.prototype.bindEvents = function () {
            var self = this;
            this.ul.addEventListener("dragstart", function (evt) {
                self.dragstart.call(self, evt);
                return false;
            }, false);
            this.ul.addEventListener("dragend", function (evt) {
                self.dragend.call(self, evt);
                return false;
            }, false);
            this.ul.addEventListener("dragenter", function (evt) {
                self.dragenter.call(self, evt);
                return false;
            }, true);
            this.ul.addEventListener("dragleave", function (evt) {
                self.dragleave.call(self, evt);
                return false;
            }, true);
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
