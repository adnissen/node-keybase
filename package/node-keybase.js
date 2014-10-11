var request = require('request');

function NodeKeybase() {
  this.test = 0;
}

NodeKeybase.prototype.userLookup = function(type, query, callback){
  request('https://keybase.io/_/api/1.0/user/lookup.json?' + type + '=' + query, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(body);
    }
  });
}
module.exports = NodeKeybase;
