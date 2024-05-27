// const http = require("http")

// const myServer = http.createServer((req,res) =>{

//     console.log("New Req Rec");
//     res.end("hello from server")
// }


// )


// const PORT = 5000;
// myServer.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//     const log = `${Date.now()} : ${req.url} new request\n`; 
//     fs.appendFile("log.txt", log, (err) => {
//         if (err) {
//             console.error("Error writing to log file:", err);
//             res.statusCode = 500;
//             res.end("Internal Server Error");
//         } else {
//             res.end("Hello from server");
//         }
//     });
// });

// server.listen(9000, () => {
//     console.log("Server is working on port 9000");
// });


// create a server like jab ek url crete ho yeahinvioke kare toh ek text file crete ho or usmain aye ki time


const  http = require("http")
const fs = require("fs")


const server = http.createServer((req,res)=>{
   const log = `${Date.now()} : ${req.url} now request\n`;
   fs.appendFile("aman.text", aman , (err) =>{
 if(err){
    console.log(err)
 } else{
    res.end("Hello from server");
 }
   })
})


server.listen(9000, () => {
        console.log("Server is working on port 9000");
    });