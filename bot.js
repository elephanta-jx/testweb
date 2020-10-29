const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

client.query('SELECT * FROM events;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});
/*
const Discord = require('discord.js');
const config = require("./config.json");
const client = new Discord.Client();



client.on('ready', () => {
    console.log('I am ready!');
    client.user.setActivity("test"); // "Playing <>" status message for bot
});

client.on("message", async message => {
    // not really sure what these do, don't think they affect enything
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    // prefix is '!' for executing commands (prefix is set in config.json)
    let prefix = config.prefix; 
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let d = new Date();
    let helpArray = ["!ping"," !date"]; // any command we add should be added to this array

    if (cmd === `${prefix}ping`) {
        return message.channel.send("pong");
    }

    
    if (cmd === `${prefix}date`) {
        return message.channel.send(`${d}`);
    }

    if (cmd === `${prefix}help`) {
        return message.channel.send("Available commands: " + `${helpArray}`);
    }
});

client.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = config.prefix; 
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let d = new Date();
    let helpArray = ["!ping"," !date"]; // any command we add should be added to this array

    if (cmd === `${prefix}difFunc`) {
        return message.channel.send(`yes`);
    }
});
*/
// do not touch this. this is how our bot links to our code from discord. 
// the TOKEN variable is set in Heroku so the key is not on GitHub
client.login(process.env.TOKEN);
