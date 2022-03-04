/**
 * @title :  Color Picker
 * description : handle color picker
 * name : Nure Alam
 * date : 4-3-2022
 */

// menu
const menuUl = document.getElementsByTagName('ul')[0];
const li = menuUl.children;

// color picker plate
const colorPickerItem = document.querySelectorAll(
  '.colorPicker .colorPickerItem'
);

function handleColorPicker(e) {
  const colorText = e.target.innerText.toLowerCase();
  for (let i = 0; i < li.length; i++) {
    const element = li[i];
    element.style.color = colorText;
  }
}

colorPickerItem.forEach((color) => {
  color.addEventListener('click', handleColorPicker);
});
