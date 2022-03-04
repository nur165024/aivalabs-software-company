/**
 * @title :  drag and drop
 * description : handle drag and drop
 * name : Nure Alam
 * date : 4-3-2022
 */

// drag start handle
function handleDragStart(e) {
  this.style.opacity = '0.4';

  dragSrcEl = this;

  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}
// drag end
function handleDragEnd(e) {
  this.style.opacity = '1';
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  return false;
}

function handleDrop(e) {
  e.stopPropagation();

  if (dragSrcEl !== this) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
  }

  return false;
}

// items select
const draggableItems = document.querySelectorAll('.row .draggable');

draggableItems.forEach(function (item) {
  item.addEventListener('dragstart', handleDragStart);
  item.addEventListener('dragover', handleDragOver);
  item.addEventListener('dragend', handleDragEnd);
  item.addEventListener('drop', handleDrop);
});
