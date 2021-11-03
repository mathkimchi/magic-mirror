const express = require('express')
const {spawn} = require('child_process');
const app = express()
const port = 5500;

app.get('/', (req, res) => {
   
    var dataToSend;
    // spawn new child process to call the python script
    const python = spawn('python', ['C:/Users/advai/Desktop/projects/Magic-Mirror/main.py']);
    // collect data from script
    python.stdout.on('data', function (data) {
     console.log('Pipe data from python script ...');
     dataToSend = data.toString();
     path = dataToSend;
     console.log(path);
     console.log("localhost:5500/index.html?"+dataToSend);
     location.href = "localhost:5500/index.html?"+dataToSend;

    });
    // in close event we are sure that stream from child process is closed
    python.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`);
    // send data to browser
    res.send(dataToSend)
    });
    
   })
   app.listen(port, () => console.log(`Example app listening on port 
   ${port}!`))