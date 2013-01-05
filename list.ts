
//
// Typescript example project
// Simple HTML List class
//

module list {
  export class List {
    name : string;
    items : string[];
    ul : HTMLElement;  // <ul> DOM element associated with this list
    dragging : bool = false;
    constructor(name: string, ul : HTMLElement, items : string[]) {
      this.name = name;
      this.ul = ul;
      this.items = items || []; // look into doing default params with typescript
      this.render();
      this.bindEvents();
    }
    private createItemHTML(item : string) {
      return '<li draggable="true">' + item + '</li>'
    }
    render() {
      var html = "";
      var self = this;  // TODO: look into how typescript can eliminate need for such a line
      this.items.forEach(function(item) {
        html = html + self.createItemHTML(item);
      });
      this.ul.innerHTML = html;
    }
    // TODO: optional type spec for evt for these event handlers
    dragstart(evt) {
      this.dragging = true;
      this.ul.style.opacity = "0.5";
      console.log("list " + this.name + " dragstart event: " + evt);
    }
    dragenter(evt) {
      if (!this.dragging) {  // if you are the source list, don't behave like a target
        console.log("list " + this.name + " dragenter event: " + evt);
        this.ul.style.border = "2px solid #99ff99";
      }
    }
    dragleave(evt) {
      if (!this.dragging) {  // if you are the source list, don't behave like a target
        console.log("list " + this.name + " dragleave event: " + evt);
        this.ul.style.border = "2px solid #999999";  // TODO: concerned that this is not DRY w/ respect to CSS
      }
    }
    dragend(evt) {
      this.dragging = false;
      this.ul.style.opacity = "1.0";
      console.log("list " + this.name + " dragend event: " + evt);
    }
    bindEvents() {
      var self = this;  // TODO: look into how typescript can eliminate need for such a line
      //
      // TODO: see if typescript makes it possible to bind event handlers directly
      // without using the call method to explicitly set the "this"
      //
      this.ul.addEventListener("dragstart", function(evt) {
        self.dragstart.call(self, evt);
      }, false);
      this.ul.addEventListener("dragenter", function(evt) {
        self.dragenter.call(self, evt);
      }, false);
      this.ul.addEventListener("dragleave", function(evt) {
        self.dragleave.call(self, evt);
      }, false);
      this.ul.addEventListener("dragend", function(evt) {
        self.dragend.call(self, evt);
      }, false);
    }
  }
}



