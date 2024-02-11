//accessing DOM elements 
const breakfastMenuItems = document.querySelector('#breakfastMenuItems');
const maincourseMenuItems = document.querySelector('#maincourseMenuItems');
const dessertMenuItems = document.querySelector('#dessertMenuItems');

// storing the list of items in variable 
const breakfastMenu = ['Pancakes- $12', 'Eggs Benedict- $22.99', 'Oatmeal- $21.99', 'Frittata- $15'];
const mainCourseMenu = ['Steak- $22', 'Pasta- $12', 'Burger- $10.99', 'Salmon- $17'];
const dessertMenu = ['Cake- $7.99', 'Ice Cream- $5.49', 'Pudding- $8', 'Fruit Salad- $9.49'];

//dynamically generating the items of Beakfast lists
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
breakfastMenuItems.innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
maincourseMenuItems.innerHTML = mainCourseItem;


let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
dessertMenuItems.innerHTML = dessertItem;