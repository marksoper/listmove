
//
// Typescript example project
// Simple HTML List class
//

declare var Element;
    
module list {
  export class List {
    items : Element[];
    ul : Element;
    constructor(el : Element, initialItems : string[]) {
      this.el = el;
      if (initialItems) {
        initialItems.forEach(function(item) {
          this.insertElement(this.makeElement(item));
        });
      }
    }
    makeElement(item : string) {
      var element = document.createElement("li");
      element.appendChild(item);
      return element;
    }
    insertElement(element : Element, position : Number) {

    }
  }
}



