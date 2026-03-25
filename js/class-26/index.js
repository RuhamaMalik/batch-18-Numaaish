// function eidMubarak() {
//   let msg = 'Eid Mubarak to all of u!';
//   alert(msg);
// }


// function getEmail(e) {
//   e.preventDefault();
// // console.log(e);

//   let input = document.getElementById("email");
//   let username = document.getElementById("username");
//   if(input.value && username.value){
//     console.log(input.value)
//     console.log(username.value)
//   }else{
//     alert("All fields are Required!")
//   };

// }


// document.getElementById("form").addEventListener("submit", getEmail)





//  function greet(){
//   console.log("Hello");
// }

// document.getElementById('btn').addEventListener('click', greet)

// document.getElementById('btn').addEventListener('click', function(){
//   console.log("Hello");

// })


// function fillZipCode() {
//   const city = document.getElementById('city').value;
//   let zipCode;
//   switch (city) {
//     case 'karachi':
//       zipCode = 1111
//       break;
//     case 'peshawar':
//       zipCode = 2222
//       break;
//     case 'quetta':
//       zipCode = 3333
//       break;
//     case 'lahore':
//       zipCode = 4444
//       break;
//     case 'islamabad':
//       zipCode = 5555
//       break;
//     default: alert('Invalid city')
//   }

//   if(zipCode !== undefined){
//     document.getElementById('zip').value = zipCode;
//   }
  
// }


///////////////////////////

function expandPara (){
  let fullPara = `Your webpage initially displays a picture of a little mammal known as the slow loris,
along with a single sentence:
Slow lorises are a group of several species of strepsirrhine primates which make up the genus
Nycticebus. Click for more.
When the user clicks the link, the paragraph expands:
Slow lorises are a group of several species of strepsirrhine primates which make up the genus
Nycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration
patterns that are species-dependent. The hands and feet of slow lorises have several adaptations
that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow
lorises have a toxic bite, a rare trait among mammals.
This is the markup.

  <a href="JavaScrip:void(0)" onclick=" shortPara ()">Read less</a>

`;

// document.getElementById('para').innerText = fullPara;
document.getElementById('para').innerHTML = fullPara;

}



function shortPara (){
  let paraText = ` Your webpage initially displays a picture of a little mammal known as the slow loris,along with a single sentence:
  <a href="JavaScrip:void(0)" onclick=" expandPara ()">Read more</a>
`
// document.getElementById('para').innerText = paraText;
document.getElementById('para').innerHTML = paraText;
}
