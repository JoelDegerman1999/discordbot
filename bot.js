require("dotenv").config();

const cron = require("cron");

const Discord = require("discord.js");

const client = new Discord.Client();

let channel;

client.login(process.env.BOT_TOKEN).then(() => {
    channel = client.channels.cache.get("784086230769336353");
}) 

let monday = new cron.CronJob("58 8 * * 1", () => {
  channel.send("Kom ihåg lektionen med Ulf kl. 09.00");
});
let friday = new cron.CronJob("58 8 * * 5", () => {
  channel.send("Kom ihåg lektionen med Ulf kl. 09.00");
});

let test = new cron.CronJob("* * * * *", () => {
    channel.send("**```Kom ihåg lektionen med Ulf kl. 09.00```**");
  });
monday.start();
friday.start();
test.start()
