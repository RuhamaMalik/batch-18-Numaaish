const express = require('express');
const { get } = require('node:http');
const { ageCheck } = require('./middlewares');
const app = express();



// app.get('', (req, res) => {
//     res.send('hello');
// });

// app.get('/v1/products', (req, res) => {
//     res.send('Version 1');
// });

// app.get('/v2/products', (req, res) => {
//     res.send('Version 1');
// });

// app.get('/api/v2/products', (req, res) => {
//     res.send('Version 1');
// });
// app.get('/getAllUsers', (req, res) => {
//     res.send('Version 1');
// });

/// 200 
/// 201
/// 204

/// 301
/// 302

/// 400 
/// 401 
/// 403
/// 404 

/// 500
/// 503 

//////////////

// GET  ---- /getAllUsers ---- /users
// GET  ---- /getUsers/:id --- /users/:id
// POST ---- /createUser ----- /users
// PUT  ---- / updateUser/:id- /users/:id [name,email,age]
// PATCH ---- / updateUser/:id /users/:id [name]
// DELETE --- /deleteUser/:id  /users/:id


// app.get('/api/users', (req, res) => {
//     ///db query
//     res.status(200).json({ name: 'ruhama' });
// })

// app.get('/api/users/:id', (req, res) => {
//     // req.params.id
//     ///db query  
//     res.status(204).json({ name: 'ruhama' });
// })

// app.post('/api/users', (req, res) => {
//     ///db query  
//     res.status(201).json({ name: 'ruhama' });
// })


// app.route('/api/users/:id')
//     .get((req, res) => {
//         res.status(204).json({ name: 'ruhama' });
//     })
//     .put((req, res) => {
//         res.status(204).json({ name: 'ruhama' });
//     })
//     .patch((req, res) => {
//         res.status(204).json({ name: 'ruhama' });
//     })
//     .delete((req, res) => {

//         res.status(204).json({ name: 'ruhama' });
//     })

///////////////////////  Middleware 


app.use(ageCheck); //// application level middleware

app.get('',(req,res)=>{
res.send('------------------- paas')
})
app.get('/products',(req,res)=>{
res.send('------------------- products')
})


app.listen(8000, () => console.log('Server is Running')
)