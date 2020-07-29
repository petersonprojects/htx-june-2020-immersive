
// authenication

const pbkdf2 = require('pbkdf2');
const crypto = require('crypto');

let password = 'someUserPassword';

// password + salt => crypto algorithm => store in database

// salt is a random set of data or characters
// used to combine with user password to avoid pass cracking with rainbow tables

let salt = crypto.randomBytes(20).toString('hex');

let key = pbkdf2.pbkdf2Sync(
    password,
    salt,
    3600,
    256,
    'sha256'
);

let hash = key.toString('hex');

let stored_password = `pbkdf2_sha256$3600$${salt}$${hash}`;

/////////////////////////////////////////
// a person logging back in

let pass_parts = stored_password.split('$');

console.log(pass_parts);

let newPassword = 'someUserPassword';

let keyNewLogin = pbkdf2.pbkdf2Sync(
    newPassword,
    pass_parts[2],
    parseInt(pass_parts[1]),
    256,
    'sha256'
);

let hashNewLogin = keyNewLogin.toString('hex');

if(hashNewLogin  == pass_parts[3])
{
    console.log('Passwords match!');
}
else
{
    console.log('Passwords do not match.');
}