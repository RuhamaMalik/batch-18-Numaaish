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

gsap.registerPlugin(TextPlugin)
gsap.registerPlugin(ScrollTrigger) 

// let tl = gsap.timeline();

// tl.from('.logo', {
//   delay: 1,
//   opacity: 0,
//   x: -40,
//   duration: 1
// })
// tl.from('nav a', {
//   opacity: 0,
//   x: -40,
//   duration: 1,
//   stagger: 0.5
// })



// // tl.from('.content h1 .abcd', {
// tl.from('.content h1 span:not(.nested)', {
//   opacity: 0,
//   x: -40,
//   duration: 1,
//   stagger:0.5
// })


// tl.from('.content h1 .nested', {
//   opacity: 0,
//   width:0,
//   duration: 1,
// })

// tl.from('.content .badge', {
//   opacity: 0,
//   x: -40,
//   duration: 1,

// })
// // tl.from('.content p', {
// //   opacity: 0,
// //   x: -40,
// //   duration: 1,

// // })

// tl.to('.content p',{
// text:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eum minima saepe suscipit deserunt
//           dolorem.`,
//          duration:1.5,
//          ease:'none' 
// })



// tl.from('.content button', {
//   opacity: 0,
//   width:0 ,
//   duration: 1,

// })
// tl.from('.hero img', {
//   opacity: 0,
//   scale: 0.5,
//   duration: 1,
// })

// tl.to('.hero img', {
//   scale: 0.8,
//   duration: 2,
//   repeat: -1,
//   yoyo: true,

// })


//////////////////////////// ScrollTrigger

gsap.from('.card1',{
  // scrollTrigger:'.container2',
  scrollTrigger:{
    trigger:'.card1',
    // markers:true,
    start:'top 60%',
    end:'top 20%',
    scrub: 2
  },
  scale:0,
  rotate:360,


})

gsap.from('.card2',{
  scrollTrigger:{
    trigger:'.card2',
    // markers:true,
    start:'top 60%',
    end:'top 20%',
    scrub: 2,
    // pin:true
  },
  scale:0,
  rotate:360,


})
// gsap.from('.card3',{
//   // scrollTrigger:'.container2',
//   scrollTrigger:{
//     trigger:'.card3',
//     markers:true,
//     start:'top 60%',
//     end:'top 20%',
//     scrub: 2
//   },
//   scale:0,
//   rotate:360,


// })


gsap.from('.card4',{
  // scrollTrigger:'.container2',
  scrollTrigger:{
    trigger:'.card4',
    // markers:true,
    start:'top 60%',
    end:'top 20%',
    scrub: 2
  },
  scale:0,
  rotate:360,


})



gsap.from('.service',{
  scrollTrigger:{
    trigger:'.service',
    markers:true,
    start:'top 50%',
    end:'top 20%',
    scrub:3
  },
  opacity:0,
  y:50,
  duration:0.5,
  stagger:0.5
})