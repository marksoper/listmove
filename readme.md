
# Experiment with Typescript and HTML5 Drag & Drop

## Usage

Open listmove.html in your browser


## Comments

1. This code is not thoroughly tested: browser support includes Chrome, Firefox, Safari (but NOT IE)

2. In addition to meeting the requirements, a key design goal for the List class was to make the lists completely independent of each other:

Pros
 - such that they didn't have to maintain any reference to other lists
 - such that no centralized oversight is required - note that listmove.js and multilist.js don't do anything other than instantiate whatever lists you need

3. A key design decision was the use of [HTML5 Drag and Drop](https://developer.mozilla.org/en-US/docs/DragDrop/Drag_and_Drop) to accomplish the movement of items between lists

Pros
- nice use of native browser UI features (like feedback to user as to when object is droppable) for dragging and dropping items
- doesn't require use of external library (e.g. JQuery UI)

Cons
- questionable cross-browser support
- some aspects handled differently even between webkit implementations (e.g. what Chrome considers a "copy" dragEffect, Safari considers a "move" dragEffect)

4. A key design decision was to separate list data from its DOM represenation.  List items are kept in an array called "items" as raw data. List presentation is generated from this data using via the render function, which in its current form is a brute force replacement of the entire list's presentation each time the list data is changed.

Pros
- Confers powerful benefits similar to that of using a framework like Backbone vs. having data maintained in the DOM, inter-related with presentation markup - this [backbone overview by Addi Osmani](http://addyosmani.github.com/backbone-fundamentals/) does a decent job of describing these benefits

Cons
- added complexity in maintaining sync between data and presentation - e.g. the brute force replacement method chosen here might perform poorly for very large lists



## Requirement:

Move items between two lists rendered in HTML

## Inputs:

Left selection list { "horse", "cat", "dog" }, right selection list { "mouse", "bird", "squirrel" }

## Expected output:

1) When an item is moved from one list to the other, it should then only reside in the new list (for instance, moving "mouse" from the right removes "mouse" from the right and adds it on the left (simply add the new entry to the bottom of the list).

2) When the item is selected and dragged, provide a graphical representation of the object and have that image follow the mouse as it is dragged from one selection list to the other.

3) When the item is dragged over a selection list to insert into, highlight that selection list.

4) When the mouse key is released, if it is over the new selection list, add it to the list; if not, return to normal mouse cursor behavior.



