

const myDiv = document.createElement('div');
myDiv.classList.add('container');
console.log(myDiv);

const myUnorderedList = document.createElement('ul');
myUnorderedList.classList.add('mainlist');
console.log(myUnorderedList);

const myListItem = document.createElement('li');
myListItem.textContent = 'Random Text';
myListItem.classList.add('card');
console.log(myListItem);

for (i=0; i<=4; i++) {
    const myListItem2 = document.createElement('li');
    myListItem2.textContent = ('Item: ' + i);
    console.log(myListItem2);
    myUnorderedList.insertAdjacentElement('beforeend',myListItem2);
}

// myUnorderedList.insertAdjacentElement('afterbegin',myListItem2);

myDiv.appendChild(myUnorderedList);
document.body.appendChild(myDiv);