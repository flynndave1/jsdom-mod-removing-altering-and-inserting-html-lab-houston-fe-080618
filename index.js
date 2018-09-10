/* Enter the code to remove the main node element under this comment */

/* Create your new element here and assign it to newHeader */
document.querySelector('main').remove();
var element = document.createElement('div');

document.body.appendChild(element);

var ul = document.createElement('ul');
 
for (let i = 0; i < 7; i++) {
  let li = document.createElement('li')
  li.innerHTML = (i + 1).toString()
  ul.appendChild(li)
}
 element.appendChild(ul);
 
 var element2 = document.createElement('h1');
 document.body.appendChild(element2);

 element2.innerHTML = 'Hello, DOM!';
element2.style.backgroundColor = '#ff0090';
element2.style.textAlign = 'center';
ul.style.textAlign = 'left';

ul.removeChild(ul.querySelector('li:nth-child(2)'));

var newHeader = document.createElement("h1");

document.body.appendChild(newHeader);
newHeader.setAttribute("id", "victory");
 newHeader.innerHTML = 'David is the Champion!!';
 newHeader.style.backgroundColor = '#00ff90';
 




