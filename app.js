const express = require('express');
const cors = require('cors');
var fs = require('fs');
var csvWriter = require('csv-write-stream');
var writer = csvWriter({sendHeaders: false}); //Instantiate var
var csvFilename = "data.csv";
var stringify = require('csv-stringify');

if (!fs.existsSync(csvFilename)) {
  writer = csvWriter({sendHeaders: false});
  writer.pipe(fs.createWriteStream(csvFilename));
  writer.write({
    header1: 'URL'
  });
  writer.end();
} 

const app = express();
app.use(cors({
   origin: '*'
}));
app.listen(3000, () => console.log('ILUVU3000'));
app.use(express.json());

app.post('/', (request,response) => {
   console.log(request.body);
   writer = csvWriter({sendHeaders: false});
   writer.pipe(fs.createWriteStream(csvFilename, {flags: 'a'}));
   writer.write({
      header1: JSON.stringify(request.body)
   });
   writer.end();
   response.end();
});
