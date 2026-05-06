////////// Generator

// function *special (){
// function* special (){
//   console.log('statement --- 1');
//   yield;

//   console.log('statement --- 2');
//   console.log('statement --- 2');
//   console.log('statement --- 2');
//   yield 'result 2'; 

//   console.log('statement --- 3');
// yield ' abcd';
// console.log("test");


// }

// let g = special ();

// // console.log(g.next());


// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());


//////////////////////////////

// function* pulao() {
//   let x = yield;
//   let y = yield;
//   let z = yield;
//   // console.log(x);
//   // console.log(y);
//   // console.log(z);
// yield;
// yield [x,y,z]
// }

// let p = pulao();
// p.next();
// p.next(55);
// p.next("Ruhama");
// p.next({name:"abcd"});

// console.log(p.next());

//////////////////////////////

function* infinite() {
  let num = 1;
  while (true) {
    yield num++;
  }

}

let i = infinite();

// console.log(i.next());
// console.log(i.next());

for (let abcd of i) {
  if (abcd <= 10) {
    console.log(abcd);
  } else {
    break;
  }
}

