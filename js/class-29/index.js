// const para = document.getElementById('para1');

// console.log(para.attributes[1].nodeValue); // my para

///////////// 67 - Adding nodes

// const box = document.getElementById("box");

// const img  = document.createElement('img');
// img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIUiP2s53YytOR49HulvnV12uMmpy90bi-iw&s');
// img.setAttribute('width','400');

// box.appendChild(img);

// const ul = document.createElement('ul');
// const li = document.createElement('li');
// const text = document.createTextNode('MG Motors Pakistan redefines urban mobility with smart, stylish, and fuel-efficient SUVs.');
// li.appendChild(text)
// li.setAttribute("class", 'list');


// ul.appendChild(li);
// box.appendChild(ul);


////////////////// Todo App

let ul = document.getElementById('ul');

function addTask() {
  let input = document.getElementById('input');

  if (input.value) {

    let li = document.createElement('li');
    let text = document.createTextNode(input.value);
    li.appendChild(text);

    let delBtn = document.createElement('button');
    let btnText1 = document.createTextNode("Delete");
    delBtn.appendChild(btnText1);
    delBtn.setAttribute('onclick', 'deleteTask(this)');
    li.appendChild(delBtn);


    let editBtn = document.createElement('button');
    let editBtnTxt = document.createTextNode('Edit');
    editBtn.appendChild(editBtnTxt);
    editBtn.setAttribute('onclick', 'editTask(this)');
    li.appendChild(editBtn);

    ul.appendChild(li);
  } else {
    alert('Pehly kuch likho tw bhai!');
  }

  input.value = '';
}


function deleteAll() {
  ul.innerHTML = '';
}

function deleteTask(btn) {
  // console.log(btn.parentNode);
  btn.parentNode.remove();
}


function editTask(btn) {
  // console.log(btn.parentNode.firstChild.nodeValue);
  let oldTask = btn.parentNode.firstChild.nodeValue;
  let newTask = prompt("Update task", oldTask);
  if (newTask) {
    btn.parentNode.firstChild.nodeValue = newTask;
  }
}