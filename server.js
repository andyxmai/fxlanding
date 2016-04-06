var path = require('path');
var express = require('express');
var nodemailer = require('nodemailer')
var bodyParser = require('body-parser')

var app = express();
var PORT = process.env.PORT || 8080

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/email', function(request, response) {

  var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
          user: 'fxrisksafeguard@gmail.com', // Your email id
          pass: 'fxrisk2016' // Your password
      }
  })

  var mailOptions = {
    from: request.body.email, // sender address
    to: 'andrew.x.mai@gmail.com', // list of receivers
    subject: 'FX Inquiry - ' + request.body.name, // Subject line
    text: request.body.description
  }

  transporter.sendMail(mailOptions, function(error, info){
    if(error) {
      response.status(500).send({error: error});
    } else {
      response.status(200).json({status: 'ok'})
    }
  })
});

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/public/index.html')
});

app.listen(PORT, function() {
  console.log("Server is up and running on port: " + PORT)
});
