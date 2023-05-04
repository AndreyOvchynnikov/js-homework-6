const categories = document.querySelectorAll('.item');
console.log('Number of categories:', categories.length);

[...categories].map(category => {
    console.log('Category:', category.firstElementChild.textContent);
    console.log('Elements:', category.lastElementChild.children.length);
 })