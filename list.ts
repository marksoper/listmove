
//
// Typescript example project
// Simple HTML List class
//

module list {
  export class List {
    items : string[];
    ul : HTMLElement;  // <ul> DOM element associated with this list
    constructor(ul : HTMLElement, items : string[]) {
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
    dragenter(evt) {
      console.log("dragenter event: " + evt);
    }
    dragstart(evt) {  // TODO: optional type spec for evt
      console.log("dragstart event: " + evt);
    }
    bindEvents() {
      var self = this;  // TODO: look into how typescript can eliminate need for such a line
      //
      // TODO: see if typescript makes it possible to bind event handlers directly
      // without using the call method to explicitly set the "this"
      //
      this.ul.addEventListener("dragenter", function(evt) {
        self.dragenter.call(self, evt);
      }, false);
      this.ul.addEventListener("dragstart", function(evt) {
        self.dragstart.call(self, evt);
      }, false);
    }
  }
}



