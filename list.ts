
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
    }
    createItemElement(item : string) {
      var element = document.createElement("li");
      //element.appendChild(item);
      //
      // may need to flesh out tag attributes
      //
      return element;
    }
    render() {
      var html = "";
      var self = this;  // TODO: look into how typescript can eliminate need for such a line
      this.items.forEach(function(item) {
        html = html + self.createItemElement(item);
      });
      this.ul.innerHTML = html;
    }
  }
}



