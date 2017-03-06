var api_key = process.env.MG_API;
var domain = 'www.mydomain.com';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

module.exports = mailgun;
