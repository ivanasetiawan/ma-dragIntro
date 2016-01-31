// get all draggie elements
var draggableElems = document.querySelectorAll('[data-draggable]');
var draggableElemsDestroy = document.querySelectorAll('[data-draggable-close]');
// array of Draggabillies
var draggies = []

// init Draggabillies
for ( var i=0, len = draggableElems.length; i < len; i++ ) {
  var draggableElem = draggableElems[i];
  var draggie = new Draggabilly( draggableElem, {
    containment: true
  });
  draggies.push( draggie );
}
