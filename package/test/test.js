var NodeKeybase = require('../node-keybase.js');
var Sync = require('sync');

keybase = new NodeKeybase();

testUsernameLookup = function(){
  keybase.userLookup('username', 'adnissen', function(response){
    console.log('should return the adnissen object by username');
    var object = JSON.parse(response);
    if (object.them && object.them.basics.username == 'adnissen')
      console.log('success!');
    else
      console.log('fail!');


    keybase.userLookup('username', 'alklakkakakkakak', function(response){
      console.log('should fail trying to get nonexsistant user');
      var object = JSON.parse(response);
      if (!object.them)
        console.log('success!');
      else
        console.log('fail!');

      return null;
    });
  });
}

testDomainLookup = function(){
  keybase.userLookup('domain', 'adnissen.com', function(response){
    console.log('should return the adnissen object by domain');
    var object = JSON.parse(response);
    if (object.them.basics && object.them.basics.username == 'adnissen')
      console.log('success!');
    else
      console.log('fail!');


    keybase.userLookup('domain', 'wtf.com', function(response){
      console.log('should fail trying to get a website that does not belong to adnissen');
      var object = JSON.parse(response);
      if (!object.them.basics || object.them.basics.username != 'adnissen')
        console.log('success!');
      else
        console.log('fail!');
    });
  });
}

runTests = function(){
  Sync(function(){
    console.log('running tests');
    testUsernameLookup();
    testDomainLookup();
  });
}

runTests();
