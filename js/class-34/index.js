// function submitForm() {

//   let isCity = checkForSelection('cities', 'plz select a city!');
//   let isFruit = checkForSelection('fruits', 'plz select a fruit!');

//   if (!isCity || !isFruit) {
//     return false;
//   }

// }


// function checkForSelection(id, abcd) {
//   console.log(id);

//   if (document.getElementById(id).selectedIndex === 0) {
//     alert(abcd);
//     return false;
//   } else {
//     return true;
//   }
// }



// function validateRadios() {
//   var radios = document.getElementsByName("r1");
//   for (var i = 0; i < radios.length; i++) {
//     if (radios[i].checked) {
//       return true;
//     }
//   }
//   alert("Please check one.");
//   return false;
// }




// function validateZIP() {
//   var zip = document.getElementById("zip").value;
//   if (zip.length < 5) {
//     alert("Please enter a 5-digit code.");
//     return false;
//   }

//   for (let i = 0; i <= 4; i++) {
//     const thisChar = parseInt(zip[i]);
//     if (isNaN(thisChar)) {
//       alert("Please enter only numbers.");
//       return false;
//     }
//   }
// }




// console.log(isNaN(parseInt('5'))); /// false
// console.log(isNaN(parseInt('A'))); /// true

////// "abcgmail@ab.om".indexOf(" ") // -1

// function validateEmail() {
//   var email = document.getElementById("email").value;
//   let addressIsLegal = true;

//   if (email.indexOf(" ") !== -1) {
//     // alert("No spaces allowed in address");
//     // return false;
//     addressIsLegal = false;
//   }

//   if (email.indexOf("@") < 1 || email.indexOf("@") > email.length - 5) {
//     addressIsLegal = false;
//   }

//   if (email.indexOf(".") - email.indexOf("@") < 2 ||
//     email.indexOf(".") > email.length - 3) {
//     addressIsLegal = false;
//   }


//   if (addressIsLegal === false) {
//     alert("Please correct email address");
//     return false;
//   }


// }

// function validateEmail() {
//   var eEntered = document.getElementById("address").value;
//   var regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;
//   if (!(eEntered.match(emailCorrectPattern))) {
//     alert("Please correct email address");
//     return false;
//   }
// }



// console.log('Before');
// try {
//   alrt('hello');
// } catch (err) {
//   console.log(err);
// }
// console.log('After');



function fetchData() {
  try {
    console.lg('Products');
  } catch (err) {
    console.log(err);
  }finally{
    console.log('ma sabky saath hun jese Loader');
    
  }
 
}

fetchData() 