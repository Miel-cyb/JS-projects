// // // similar to css

// // // document.body.style.backgroundColor = 'purple';
// // // document.body.style.color = 'yellow';
// // // document.getElementById('btn').style.color = 'red';

// // // const h1 = document.getElementById('title');
// // // h1.style.fontStyle = 'italic';

// // // const items = document.getElementsByTagName('li');
// // // items[1].style.color='cyan';


// // // //PARENT ELEMENT
// // // const heading = document.querySelector('h3');
// // // console.log(heading.parentElement);
// // // const next = heading.nextSibling.nextSibling;
// // // const next2 = heading.nextElementSibling.nextElementSibling;
// // // console.log(next);
// // // console.log(next2)
// // // console.log(heading.previousSibling.previousSibling);

// // // //textContent
// // // console.log(heading.textContent);

// // // //getAttribute and setAttribute
// // // const first = document.querySelector('.first');
// // // console.log(first.getAttribute('class'));
// // // const link = document.getElementById('link')
// // // const last = link.nextElementSibling;
// // // last.setAttribute('class','second');
// // // last.textContent = 'I also have a class';
// // // console.log(last);


// // // //CLASSNAME,CLASSLIST
// // //  const first1 = document.getElementById('first');
// // //  const second = document.getElementById('second');
// // //  const third = document.getElementById('third');
// // //  const classValue = first1.className;
// // //  console.log(classValue);
// // //  second.className = 'color text';
// // //  third.classList.add('color','text');
// // // const class1 = third.classList;
// // // // third.classList.remove('text');
// // // let output = third.classList.contains('color');
// // // if(output){
// // //     console.log('Contains a class of color');
// // // } else{
// // //     console.log('Does not contain a class of color');
// // // }


// // //createElement
// // //createtextNode(textContent)
// // //element.appendChild(childelement)

// // const resultt = document.querySelector('#resultt');

// // //create empty element
// // const bodyDiv = document.createElement('div');

// // //create a text node
// // const sentence = document.createTextNode('a simple structure');

// //  //combining the sentence to the element created
// //  bodyDiv.appendChild(sentence);
// //  document.body.appendChild(bodyDiv);

// //  //INSERTBEFORE('ELEMENT','LOCATION)
// //  document.body.insertBefore(bodyDiv,resultt);

// //  //replaceChild('new','old')
// //  const smallElement = document.createElement('h6');
// //  const smallText = document.createTextNode('I am small heading');
// //  smallElement.classList.add('red');
// // smallElement.appendChild(smallText);
// // document.body.replaceChild(smallElement,bodyDiv);

// // //prepend and innerText
// // const leadText = document.createElement('h3');
// // leadText.innerText = 'i am a new prepend';
// // document.body.prepend(leadText);

// // //remove,removeChild
// // const res = document.querySelector('#resultt');
// // // resultt.remove();
// // const head = resultt.querySelector('h1');
// // resultt.removeChild(head);

// // //innerHTML
// // //textContent
// // const list = document.getElementById('first');
// // const div = document.getElementById('second');
// // const item = document.querySelector('.item');
// // console.log(div.innerHTML);
// // const ul =document.createElement('ul');
// // ul.innerHTML = '<li class="item">list item</li>';
// // document.body.appendChild(ul);

// // addEventListener
// // const btn = document.querySelector('.btn');
// // const headd = document.querySelector('h3');
// // btn.addEventListener('click',function(){
// // headd.classList.add('red');
// // })

// // function changeColors(){
// //     let hasClass =headd.classList.contains('red');
// //     if(hasClass){
// //         headd.classList.remove('red');
// //     }else{
// //         headd.classList.add('red');
// //     }
// // }
// // btn.addEventListener('click',changeColors)

// //mouseEvents
// // btn.addEventListener('click',function(){
// //     console.log('you clicked me');
// // })
// // btn.addEventListener('mouseup',function(){
// //     console.log('UP');
// // })
// // btn.addEventListener('mousedown',function(){
// //     console.log('Down');
// // })
// // btn.addEventListener('mouseenter',function(){
// //     headd.classList.add('blue');
// // })
// // btn.addEventListener('mouseleave',function(){
// //    headd.classList.remove('blue');
// // })

// //keyEvents
// const nameInput = document.getElementById('name');
// nameInput.addEventListener('keypress',function(){
//     console.log('You\'re typing');
// })
// nameInput.addEventListener('keydown',function(){
//     const colors = ['red','green']
//     for(let i = 0; i<=colors.length; i++){
// document.body.style.backgroundColor = colors[i];
//     }
// })
// nameInput.addEventListener('keyup',function(){
//     const bodyy =document.createTextNode('YOU FINISHED')
//     document.body.appendChild(bodyy)
//     console.log(nameInput.value);
// })


// event object,event.currentTarget,event.type,preventDefault()
// const btn = document.querySelector('.btn');
// const headd = document.querySelector('h3');
// const Link = document.getElementById('link');
// headd.addEventListener('click',function(event){
//     console.log(event.currentTarget);
// })
//  function someFunc(e){
//     e.preventDefault();
//  }
//  Link.addEventListener('click',someFunc)