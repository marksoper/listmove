
//
// Typescript example project
// Simple HTML List class
//

module list {
  export class List {
    name : string;
    ul : HTMLElement;  // <ul> DOM element associated with this list
    items : string[];
    private dragging : bool = false;
    private originalBorder : string;
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

    //
    // source event handlers
    //

    dragstart(evt) {
      this.dragging = true;
      this.ul.style.opacity = "0.5";
      console.log("list " + this.name + " dragstart event: " + evt);
    }

    dragend(evt) {
      evt.preventDefault();
      evt.stopPropagation();
      this.dragging = false;
      this.ul.style.opacity = "1.0";
      console.log("list " + this.name + " dragend event: " + evt);
    }

    //
    // target event handlers
    //

    dragenter(evt) {
      // if you are the source list, don't behave like a target
      if (this.dragging) {
        return;
      }
      this.originalBorder = this.originalBorder || this.ul.style.border;
      evt.preventDefault();
      evt.stopPropagation();
      console.log("list " + this.name + " dragenter event on tagName: " + evt.target.tagName);
      this.ul.style.border = "2px solid #99ff99";
    }

    dragleave(evt) {
      // if you are the source list, don't behave like a target
      if (this.dragging) {
        return;
      }
      // if the drag is just leaving an <li>, don't remove the highlighting from the <ul>
      if (evt.target.tagName.toLowerCase() === "li") {
        return;
      }
      evt.preventDefault();
      evt.stopPropagation();
      console.log("list " + this.name + " dragleave event on tagName: " + evt.target.tagName);
      this.ul.style.border = this.originalBorder;
    }

    bindEvents() {
      var self = this;  // TODO: look into how typescript can eliminate need for such a line
      //
      // TODO: see if typescript makes it possible to bind event handlers directly
      // without using the call method to explicitly set the "this"
      //

      //
      // source (drag) events
      //
      this.ul.addEventListener("dragstart", function(evt) {
        self.dragstart.call(self, evt);
        return false;
      }, false);
      this.ul.addEventListener("dragend", function(evt) {
        self.dragend.call(self, evt);
        return false;
      }, false);

      //
      // target (drop) events
      //
      this.ul.addEventListener("dragenter", function(evt) {
        self.dragenter.call(self, evt);
        return false;
      }, true);
      this.ul.addEventListener("dragleave", function(evt) {
        self.dragleave.call(self, evt);
        return false;       
       }, true);




    }
  }
}



