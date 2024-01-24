const os = require('node:os');
console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());

console.log("free memory: " + os.freemem()/(1024*1024));
console.log("free memory: " + os.totalmem()/(1024*1024*1024));
console.log("Host Name: " + os.hostname());
console.log(os.userInfo());