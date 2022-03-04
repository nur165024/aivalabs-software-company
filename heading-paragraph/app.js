const heading = document.querySelector('.heading');
const paragraph = document.querySelector('.paragraph');
const getText = paragraph.innerHTML.length / 2;
let paragraphText = paragraph.innerText;

heading.addEventListener('mouseover', handlerListener, false);
heading.addEventListener('mouseout', handlerListener, false);
heading.addEventListener('click', handlerListener, false);

let clicked = 0;

function handlerListener(e) {
  if (e.type == 'click') {
    clicked++;
  } else if (e.type == 'mouseover') {
    if (paragraph.innerText.length / 2) {
      const data = paragraph.innerText.substring(0, getText);
      paragraph.innerText = data;
      paragraph.style.display = 'block';
    }
  } else {
    paragraph.style.display = 'none';
  }

  if (clicked > 0) {
    paragraph.innerText = paragraphText;
    paragraph.style.display = 'block';
  }
}
