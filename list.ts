
//
// Typescript example project
// Simple HTML List class
//

declare var Element;
    
module list {
  export class List {
    elements : Element[];
    ul : Element;  // <ul> DOM element associated with this list
    constructor(ul : Element, initialItems : string[]) {
      this.ul = ul;
      if (initialItems) {
        initialItems.forEach(function(item) {
          this.insertElement(this.makeElement(item));
        });
      }
    }
    makeElement(item : string) {
      var element = document.createElement("li");
      element.appendChild(item);
      //
      // may need to flesh out tag attributes
      //
      return element;
    }
    insertElement(element : Element, position : Number) {
      position = position || this.elements.length;
      this.elements.splice(position, 0, element)
    }
  }
}



