const os = require('os');

//info about user
const user = os.userInfo();

//system uptime in seconds
const elapsedTime = os.uptime();

//about os
const currentOS = {
    name: os.type(),
    release: os.release(),
    freeMem: os.freemem(),
    totalMem: os.totalmem(),
}
console.log(currentOS);