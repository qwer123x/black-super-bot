const fs = require("fs");
const { File } = require('megajs');
const session = require('../set.js');

async function authentication() {
  if (!fs.existsSync(__dirname + '/sessions/creds.json')) {
    if(!session) return console.log('Please add your session to SESSION env !!')
const sessdata = session.replace("BLACK MD;;;", '');
const filer = await File.fromURL(`https://mega.nz/file/${sessdata}`)
filer.download((err, data) => {
if(err) throw err
fs.writeFile(__dirname + '/sessions/creds.json', data, () => {
console.log("Session Connected  successfully ✅")
console.log("Ignore the qr code😕, wait fo 2 minutes for authentication process to complete✅️")
})})}
}

module.exports = authentication;
