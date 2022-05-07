const fs = require('fs');
// const path = require('path');
// const os = require('os');
// const data = require('./module');
const http = require("http");
const dateTime = require('node-datetime');


var dt = dateTime.create();
var date_timefmt= dt.format('m_d_Y-H_M_S');
var currtimetsamp = dt.format('H:M:S')

const filelocation=`./day40assign/`+date_timefmt+`.txt`

fs.writeFile(filelocation, currtimetsamp, function (err) {
     if (err) throw err;
     console.log('File is created successfully.');
   });

var files = fs.readdirSync(`./day40assign/`);
console.log(files)

// console.log(data.hello())

// // setTimeout and setInterval
// function hello(){
//     console.log("Hi")
// }
// const setTimeout = global.setTimeout(hello, 3000)
// const setInterval = global.setInterval(hello, 3000)

// console.log(__dirname);
// console.log(__filename);
// console.log(path);
// const fileContent = path.parse(__filename)
// console.log(fileContent)
// console.log(os.userInfo())
// console.log(os.freemem())
// console.log(os.type())

// const fsData = fs.readFileSync(__dirname);
// console.log(fsData)

// fs.readdir(__dirname, (err, files) => {
//     if (err)
//       console.log(err);
//     else {
//       console.log("\nCurrent directory filenames:");
//       files.forEach(file => {
//         console.log(file);
//       })
//     }
//   })

// console.log(fs.readFileSync('./module.js', "utf8"));

// API Call

const server = http.createServer((req,res) => {
    console.log("came")
    if(req.url === '/createfile') {
        res.write(JSON.stringify({
            name: "SSS",
            age: 20
        }))
    } else if (req.url === '/list') {
        res.write(JSON.stringify({
            title: 'React',
            duration: '2 months'
        }))
    } else {
        res.write("{}")
    }
    res.end()
})

server.listen(3001)

console.log("server on");