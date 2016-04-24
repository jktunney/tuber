var Uber = require('node-uber');


var uberClient = new Uber({
    client_id: 'JLdPD6d6TAWMFMWWyx9oOPGu1Lg4pMGI',
    client_secret: 'iL2jtSqCfJu_ZYsw3dsSiJq06gB6-RfUzG-elk7m',
    server_token: '9r2VXLQ_O5_MljtnJC0pP_bYBVgTJ6Vrp21EP6ve',
    name: 'tubrino'
    'access'
});



uberClient.authorization({ authorization_code: 'https://login.uber.com/oauth/v2/authorize?client_id=YOUR_CLIENT_ID&response_type=code'}, function (err, accessToken, refreshToken) {
    uberClient.user.profile(accessToken, function (err, res) {
        console.log(err);
        console.log(res);
        });
});