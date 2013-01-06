var list;
(function (list) {
    var List = (function () {
        function List(name, ul, items) {
            this.activeSource = false;
            this.activeTarget = false;
            this.dragActiveSubelement = false;
            this.name = name;
            this.ul = ul;
            this.originalBorder = this.ul.style.border;
            this.items = items || [];
            this.render();
            this.bindEvents();
        }
        List.prototype.add = function (item) {
            this.items.push(item);
            this.render();
        };
        List.prototype.remove = function (at) {
            this.items.splice(at, 1);
            this.render();
        };
        List.prototype.createItemHTML = function (item) {
            return '<li draggable="true">' + item + '</li>';
        };
        List.prototype.activeTargetOn = function () {
            this.activeTarget = true;
            this.ul.style.border = "2px solid #99ff99";
        };
        List.prototype.activeTargetOff = function () {
            this.activeTarget = false;
            this.ul.style.border = this.originalBorder;
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
            var data = {
                list: this.name,
                item: evt.target.innerHTML
            };
            evt.dataTransfer.setData('text/plain', JSON.stringify(data));
        };
        List.prototype.dragend = function (evt) {
            evt.preventDefault();
            evt.stopPropagation();
            this.activeSource = false;
            this.ul.style.opacity = "1.0";
            if(evt.dataTransfer.dropEffect === "copy" || evt.dataTransfer.dropEffect === "move") {
                var index = Array.prototype.indexOf.call(evt.target.parentNode.childNodes, evt.target);
                this.remove(index);
            }
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
            this.activeTargetOn();
        };
        List.prototype.dragleave = function (evt) {
            evt.preventDefault();
            evt.stopPropagation();
            if(this.activeSource) {
                return;
            }
            var tagName = evt.target.tagName.toLowerCase();
            if(tagName === "li") {
                this.dragActiveSubelement = false;
                return;
            }
            if(this.dragActiveSubelement) {
                return;
            }
            this.activeTargetOff();
        };
        List.prototype.dragover = function (evt) {
            if(this.activeSource) {
                return;
            }
            evt.preventDefault();
            evt.stopPropagation();
        };
        List.prototype.drop = function (evt) {
            evt.preventDefault();
            evt.stopPropagation();
            if(this.activeSource) {
                return;
            }
            this.activeTargetOff();
            this.add(JSON.parse(evt.dataTransfer.getData("text/plain")).item);
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
            }, false);
            this.ul.addEventListener("dragleave", function (evt) {
                self.dragleave.call(self, evt);
                return false;
            }, false);
            this.ul.addEventListener("drop", function (evt) {
                self.drop.call(self, evt);
                return false;
            }, false);
            this.ul.addEventListener("dragover", function (evt) {
                self.dragover.call(self, evt);
                return false;
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
