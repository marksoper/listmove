

Requirement:

Move items between two lists rendered in HTML

Inputs:

Left selection list { "horse", "cat", "dog" }, right selection list { "mouse", "bird", "squirrel" }

Expected output:

1) When an item is moved from one list to the other, it should then only reside in the new list (for instance, moving "mouse" from the right removes "mouse" from the right and adds it on the left (simply add the new entry to the bottom of the list).

2) When the item is selected and dragged, provide a graphical representation of the object and have that image follow the mouse as it is dragged from one selection list to the other.

3) When the item is dragged over a selection list to insert into, highlight that selection list.

4) When the mouse key is released, if it is over the new selection list, add it to the list; if not, return to normal mouse cursor behavior.

Code base:

Structured class-based JavaScript or TypeScript are satisfactory, but we have a preference for TypeScript.
