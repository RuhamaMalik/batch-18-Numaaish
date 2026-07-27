////////////// timeline


// let tl = gsap.timeline();

// tl.from('h1',{
//   opacity:0,
//   x:450,
//   duration:1
// })
// tl.from('button',{
//   opacity:0,
//   y:50,
//   duration:1
// })

// tl.from('p',{
//   opacity:0,
//   x:-450,
//   duration:1
// })

// gsap.to('button',{
//   scale:1.3,
//   duration:2,
//   backgroundColor:'pink',
//   repeat:-1,
//   yoyo:true,
//   borderRadius:'20px'
// })

//////////////////////////////////////

let tl = gsap.timeline();

tl.from('.logo', {
  delay: 1,
  opacity: 0,
  x: -40,
  duration: 1
})
tl.from('nav a', {
  opacity: 0,
  x: -40,
  duration: 1,
  stagger: 0.5
})



tl.from('.content h1 span', {
  opacity: 0,
  x: -40,
  duration: 1,
  stagger:0.5
})


tl.from('.content h1 .nested', {
  opacity: 0,
  width:0,
  duration: 1,
})

tl.from('.content .badge', {
  opacity: 0,
  x: -40,
  duration: 1,

})
tl.from('.content p', {
  opacity: 0,
  x: -40,
  duration: 1,

})
tl.from('.content button', {
  opacity: 0,
  width:0 ,
  duration: 1,

})
tl.from('.hero img', {
  opacity: 0,
  scale: 0.5,
  duration: 1,
})

tl.to('.hero img', {
  scale: 0.8,
  duration: 2,
  repeat: -1,
  yoyo: true,

})



