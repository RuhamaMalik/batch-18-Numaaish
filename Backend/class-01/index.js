//  let {first,greet} =    require('./app');

//  console.log(first);

//  greet(34343746734);

//  console.log('hellooooooooooooooooooooooooo ');

// ////////////////////////// core modules --- global

// console.log(">................. ", __dirname);
// console.log(">................. ", __filename);



// ////////////////////////// core modules --- non-global ----- fs

// let fs = require('fs');


// fs.writeFileSync('xyz.js',  `console.log('XYZ file')` );
// fs.writeFileSync('xyz.js',  `console.log('ABCD file')` );
// fs.writeFile('newFile.js', `console.log('---------- Hello')`, (err,data)=>{} )


// let data = fs.readFileSync('abcd.js', 'utf-8');
// console.log(data);
// fs.readFile('abcd.js', 'utf-8', (err, data) => console.log(data));


// fs.appendFileSync('abcd.js', `\nconsole.log('------------- Start');`)
// fs.appendFile('abcd.js', `\nconsole.log('------------- Startttttttt');`,()=>{})


// let fs = require('fs');
// let path = require('path');

// let img = path.join(__dirname,'images');
// // fs.writeFile( `${img}/dog.js` , `\nconsole.log('---------- Hello Dog');`, (err,data)=>{} )


// for (let i = 1; i <= 5; i++) {
//     fs.writeFile(`${img}/file${i}.js`, `console.log('---------- Hello File ${i}');`, (err, data) => { })
// }


// console.log('hello');
// console.log('hello');
// console.log('hello');
// console.log('hello');
// console.log('hello');
// console.log('hello');


let http = require('http');


let server = http.createServer((req, res) => {
    res.write('Hello Congratulations!');
    res.write(`[{id:1,name:"Ruhama"},{id:2,name:"Gull"}]`);
    res.end();
})

server.listen(8000, () => console.log('Server is Running!')
)





