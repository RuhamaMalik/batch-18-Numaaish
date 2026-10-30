const express = require('express');
const path = require('path');
const app = express();


// app.get('', (req, res) => {
//     res.send('My Home Page');
// });

// app.get('/about', (req, res) => {
//     res.send(`<h1>About Page</h1>
// <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, maxime!</p>
// <button>Submit</button>`);
// });

// app.get('/products', (req, res) => {
//     let products=[{id:1,title:'Shampooo'}]
//     // res.send(products);
//     res.json(products);
// });

let dirPath =path.join(__dirname,'public');
app.use(express.static(dirPath));

// app.get('',(req,res)=>{
// res.sendFile(`${dirPath}/html/index.html`)
// });

// app.get('/about',(req,res)=>{
// res.sendFile(`${dirPath}/html/about.html`)
// })

// app.get('/css',(req,res)=>{
// res.sendFile(`${dirPath}/css/style.css`)
// })



//////////////////// template engine   ----- ejs ---- Embeded JS

app.set('view engine', 'ejs');


// app.get('',(req,res)=>{
// res.render('index',{})
// })

// app.get('/profile',(req,res)=>{
// // db query

// let user={
//     name:'Ruhama Gull',
//     id:1,
//     email:'malikruhama7@gmail.com',
//     contact:'03162446746',
//     address:'SMIT Numaaish Campus',
//     skills:['React', 'express','Node','Mongo DB'],
//     experience:1
// }

// res.render('profile',{user})
// })

// app.get('/*xyz',(req,res)=>{
// res.send('<h1>Page Not Found</h1>')
// })


app.get('/products/:id',(req,res)=>{
    console.log(req.params.id);
    
// res.send(`${req.params.id}` )
res.send(`${req.query.price} -------- ${req.query.title}` )
})






app.listen(8000, () => console.log('server is running')
)