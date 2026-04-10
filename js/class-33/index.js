// function _open() {
//   var screen = window.open('','','width=400,height=500');
//   var html = `<h1>Detail Page</h1>
//   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam aliquid expedita saepe minus quibusdam placeat doloremque repellendus quis suscipit quod. Illum quae maxime sequi culpa optio magnam, voluptate corporis minima?</p>`;
//   screen.document.write(html);

// }


// function _open() {
//   var screen = window.open('./Last.html','_blank','width=800,height=800');
// }

// function checkForPopBlocker() {
//   var testPop = window.open("", "", "width=100,height=100");
//   if (testPop === null || testPop === undefined) {
//     alert("Please disable your popup blocker.");
//   }
//   testPop.close();
// }



function checkForLastName() {
  let name = document.getElementById("lastNameField");
  if (name.value.length === 0) {
    alert("Please enter your last name");
    name.focus();
    return false;
  }
}
