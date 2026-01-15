

const item = document.querySelector('.item');

// console.log(item.innerHTML);

const src = `https://picsum.photos/200`;
const myHtml = `<div class="wrapper">
                    <h2>Cute Pup</h2>
                    <img src="${src}" alt="">
                </div>`
// item.innerHTML = myHtml;

// Turn a str into a DOM element

const myFragment = document.createRange().createContextualFragment(myHtml);


document.body.appendChild(myFragment);