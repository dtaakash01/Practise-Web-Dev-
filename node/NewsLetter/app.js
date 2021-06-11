const express = require('express');
const bodyParser = require('body-parser');
const request = require('superagent');

const app = express();

app.use(express.static("Public"));
app.use(bodyParser({urlencoded: true}));

app.get('/', function(req, res){
  res.sendFile(__dirname +'/signup.html');
})

var mailchimpInstance   = 'us2',
    listUniqueId        = '486857d42d',
    mailchimpApiKey     = '6a3cd6dc7d78abd11c47f97b8d96537f-us2';

app.post('/s', function (req, res) {
    request
        .post('https://' + mailchimpInstance + '.api.mailchimp.com/3.0/lists/' + listUniqueId + '/members/')
        .set('Content-Type', 'application/json;charset=utf-8')
        .set('Authorization', 'Basic ' + new Buffer('any:' + mailchimpApiKey ).toString('base64'))
        .send({
          'email_address': req.body.email,
          'status': 'subscribed',
          'merge_fields': {
            'FNAME': req.body.firstName,
            'LNAME': req.body.lastName
          }
        })
            .end(function(err, response) {
              if (response.status < 300 || (response.status === 400 && response.body.title === "Member Exists")) {
                res.send('Signed Up!');
              } else {
                res.send('Sign Up Failed :(');
              }
          });
});

var querystring = require('querystring');
var mailchimpClientId = '887959634339';

app.get('/mailchimp/auth/authorize', function(req, res) {
  res.redirect('https://login.mailchimp.com/oauth2/authorize?' +
            querystring.stringify({
                'response_type': 'code',
                'client_id': mailchimpClientId,
                'redirect_uri': 'http://127.0.0.1:8080/mailchimp/auth/callback'
            }));
});


app.listen(8080, function(req, res){
  console.log("Server");
});


// API key
//6a3cd6dc7d78abd11c47f97b8d96537f-us2

// id
// 486857d42d

// client id
// 887959634339

//client secret
// 724a022a49261baa9927828a4108d520ed384419c2bee4e25a
