const users = require("./users"); //relative path importing
const { names, age } = require("./users"); //destructing the exported modules
const os = require("os");
const cpuDetails = os.cpus();
console.log(`Hey ${os.userInfo().username}, System Detials`);
console.log(`Total Memory : ${os.totalmem()}`);
console.log(`Kernel : ${os.version()}`);
console.log(`Home Dir: ${os.homedir()}`);
console.log(`Platform: ${os.platform()}`);
cpuDetails.forEach((cpu) => {
  console.log(`CPU Model ${cpu.model}`);
  console.log(`CPU Speed ${cpu.speed}`);
});
