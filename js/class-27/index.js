//////////// 52 - Manipulating images and text

// function hideImg() {
//   const img = document.getElementById("img");
//   img.className += ' hide';
// }

// function showImg (){
//   const img = document.getElementById("img");
//   img.className = 'img';
// }

/////////////////


// function changeImg() {
//   const img = document.getElementById('kuchBhi');
//   img.src = 'https://static.wikia.nocookie.net/disney/images/6/62/Moana_2_teaser_%2824%29.png/revision/latest?cb=20240529121119';
// }

// function oldImg() {
//   const img = document.getElementById('kuchBhi');
//   img.src = "https://www.awn.com/sites/default/files/styles/original/public/image/featured/1030461-disney-introduces-baby-moana-new-international-trailer.jpg?itok=udcRLL1A";
// }

/////////////////// 56


// const allPara = document.getElementsByTagName('p');

// console.log(allPara[2].innerText);
// allPara[2].style.color = "red";

// for (let i = 0; i < allPara.length; i++) {
//   allPara[i].style.color = "red";
// }


/////////////// slider


const images = [
  "https://miro.medium.com/1*osIwA7IVeh-oVIFKMyJOHA.jpeg",

  "https://media.sketchfab.com/models/b1af77d6abc548b992f0c9c83a5ea839/thumbnails/900f2fd99d294b3e9d91429b7675725c/f2048ef430554971a7eb6d8b75f4dc34.jpeg",

  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVIxLXUVdK-yGDPg1x_hi1KpkNtLbnOrWHLA&s",


  "https://cdna.artstation.com/p/assets/images/images/034/807/864/large/gil-lagziel-oggy-artstation1.jpg?1613299994",

  "https://mir-s3-cdn-cf.behance.net/projects/404/fb6a23223447453.Y3JvcCwxMDgwLDg0NCwwLDUzNw.png",

  "https://canvas-lb.tubitv.com/opts/OjBrVV3ieNrOAA==/72d06f11-99d6-4781-a36f-06bf02cdf5bc/CJ4GEMADOgUxLjEuOQ=="
]

let currentIndex = 0;

function next() {

  if (currentIndex === images.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }

  let image = document.getElementById('img');
  image.src = images[currentIndex]
}


function prev() {
  if (currentIndex === 0) {
    currentIndex = images.length - 1;
  } else {
    currentIndex--;
  }
  let image = document.getElementById('img');
  image.src = images[currentIndex]

}