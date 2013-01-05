

//
// Typescript example project
// Simple HTML List class
//

declare var Element;

//module List {
    
  export class List {
    items : string[];
    ul : Element;
    constructor(items : string[], ul : Element ) {
      this.items = items || [];
      this.ul
    }
  }

//}

