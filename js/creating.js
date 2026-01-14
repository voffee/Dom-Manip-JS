
const myParagraph = document.createElement('p');
myParagraph.classList.add('test-class');
myParagraph.textContent = 'SAMPLE TEXT';
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/200';
myImage.alt = 'Sample Photo';
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);

const myHeading = document.createElement('h2');
myHeading.textContent = 'Random Heading';

myDiv.insertAdjacentElement("afterbegin", myHeading);