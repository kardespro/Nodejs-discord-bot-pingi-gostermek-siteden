const exp = require("express");
const Discord = require("discord.js");
const client = new Discord.Client();

app.get("/ping", (req,res) => {
const co = client.ws.ping;
res.json(co);
});
