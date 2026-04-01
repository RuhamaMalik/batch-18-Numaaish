// ///// DOM

// const obj = {
//   key : "value",
//   propertyName : "propertyVal"
// }


// console.log(document.childNodes[1]); // html
// console.log(document.childNodes[1].childNodes[2].childNodes[1].innerHTML); // 
// console.log(document.childNodes[1].childNodes[2].childNodes[1].childNodes[1].innerText); // My Bold text





///////////// Node type

// element > 1
// attribute > 2
// text > 3
// comment > 8


// console.log(document.childNodes[1].nodeType);
// console.log(document.childNodes[1].childNodes[2].childNodes[0].nodeType); // 3
// console.log(document.childNodes[1].childNodes[2].childNodes[1].nodeType); // 8


// ///////////////////// ignore junck artifacts

// const div = document.getElementById('div');

// console.log(div.childNodes); //
// - p5

// let count = 0;
// for (var i = 0; i < div.childNodes.length; i++) {
//   if (div.childNodes[i].nodeType === 1) {
//     count++;
//   }
//   if(count === 3){
//     div.childNodes[i].innerText = 'change the text'
//   }
// }


// console.log(count);

////////////////// children | childNodes

// div.children[2].innerText = 'change the text'
// console.log(div.children.length);

// console.log(div.children[0].childNodes); // [text]
// console.log(div.children[0].children); // []

///////////////////// 62 - khanadan

const div = document.getElementById('div');
const thirdPara = document.getElementById('3');

// console.log(div.firstChild);
// console.log(div.firstElementChild);

// console.log(div.lastChild);
// console.log(div.lastElementChild);

// console.log(thirdPara.parentNode);
// console.log(thirdPara.parentElement);

// console.log(thirdPara.previousSibling);
// console.log(thirdPara.previousElementSibling.nodeName); // P
// console.log(thirdPara.firstChild.nodeValue); // 3 - This attribute


// console.log(div.nodeName); // DIV


//////////////// attributes

// console.log(thirdPara.hasAttribute('id')); // true
// console.log(thirdPara.hasAttribute('class')); // false

// console.log(thirdPara.getAttribute('id')); // 3

// thirdPara.setAttribute('class','abcd');
thirdPara.setAttribute('myCutomAttr','kuch bhi');