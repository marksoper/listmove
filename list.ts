
//
// Typescript example project
// Simple HTML List class
//

module list {

  export class List {

    name : string;
    ul : HTMLElement;  // <ul> DOM element associated with this list
    items : string[];
    private activeSource : bool = false;  // an item from this list is currently being dragged
    private activeTarget : bool = false;  // this list has a droppable item on top of it
    private dragActiveSubelement : bool = false;  // dragenter has occurred, dragleave has not, for a subelement
    private originalBorder : string;

    constructor(name: string, ul : HTMLElement, items : string[]) {
      this.name = name;
      this.ul = ul;
      this.originalBorder = this.ul.style.border;
      this.items = items || []; // look into doing default params with typescript
      this.render();
      this.bindEvents();
    }

    createItemHTML(item : string) {
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
      this.activeSource = true;
      this.ul.style.opacity = "0.5";
      console.log("list " + this.name + " dragstart event: " + evt);
      evt.dataTransfer.setData('text/plain', evt.target.innerHTML);
    }

    dragend(evt) {
      evt.preventDefault();
      evt.stopPropagation();
      this.activeSource = false;
      this.ul.style.opacity = "1.0";
      console.log("list " + this.name + " dragend event: " + evt);
    }

    //
    // target event handlers
    //

    dragenter(evt) {
      // this is a target event only - ignore if this list is a source
      if (this.activeSource) {
        return;
      }
      evt.preventDefault();
      evt.stopPropagation();
      var tagName = evt.target.tagName.toLowerCase();
      // if the drag is entering an <li>, set the dragActiveSubelement flag
      if (tagName === "li") {
        this.dragActiveSubelement = true;
      }
      console.log("-- highlighting ON -- list " + this.name + " dragenter event on tagName: " + tagName);
      this.activeTarget = true;
      this.ul.style.border = "2px solid #99ff99";
    }

    dragleave(evt) {
      // this is a target event only - ignore if this list is a source
      if (this.activeSource) {
        return;
      }
      var tagName = evt.target.tagName.toLowerCase();
      console.log("list " + this.name + " dragleave event on tagName: " + tagName);
      // if the drag is just leaving an <li>, don't remove the highlighting from the <ul>
      if (tagName === "li") {
        this.dragActiveSubelement = false;
        return;
      }
      if (this.dragActiveSubelement) {
        return;
      }
      evt.preventDefault();
      evt.stopPropagation();
      console.log("-- highlighting OFF -- setting border to " + this.originalBorder);
      this.activeTarget = false;
      this.ul.style.border = this.originalBorder;
    }

    drop(evt) {
      evt.preventDefault();
      evt.stopPropagation();
      console.log("list " + this.name + " drop event on tagName " + evt.target.tagName.toLowerCase());
    }

    bindEvents() {

      var self = this;  // TODO: look into how typescript can eliminate need for such a line
      //
      // TODO: see if typescript makes it possible to bind event handlers directly
      // without using the call method to explicitly set the "this"
      //

      //
      // bind source (drag) events
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
      // bind target (drop) events
      //
      this.ul.addEventListener("dragenter", function(evt) {
        self.dragenter.call(self, evt);
        return false;
      }, false);

      this.ul.addEventListener("dragleave", function(evt) {
        self.dragleave.call(self, evt);
        return false;       
       }, false);

      this.ul.addEventListener("drop", function(evt) {
        self.drop.call(self, evt);
        return false;       
       }, false);

      this.ul.addEventListener("dragover", function(evt) {
        evt.preventDefault();
        return false;       
       }, false);

    }
  }
}



