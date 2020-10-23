const cron = require("node-cron");
const shell = require("shelljs");

cron.schedule("13 * * * *", function () {
  shell.exec("npm run test");
});
