var Uber = require('node-uber');

var uber = new Uber({
  client_id: 'JLdPD6d6TAWMFMWWyx9oOPGu1Lg4pMGI',
  client_secret: 'iL2jtSqCfJu_ZYsw3dsSiJq06gB6-RfUzG-elk7m',
  server_token: '9r2VXLQ_O5_MljtnJC0pP_bYBVgTJ6Vrp21EP6ve',
  //redirect_uri: 'https://login.uber.com/oauth/v2/authorize',
  name: 'turbino'
});

//uber.getAuthorizeUrl(params);
uber.getAuthorizeUrl(['https://login.uber.com/oauth/v2/authorize?client_id=JLdPD6d6TAWMFMWWyx9oOPGu1Lg4pMGI&response_type=code']);
//uber.authorization(params, callback);


uber.authorization({ authorization_code: 'authorization_code' },
  function (err, access_token, refresh_token) {
    if (err) console.error(err);
    else {
      console.log(access_token);
      console.log(refresh_token);
    }
  });