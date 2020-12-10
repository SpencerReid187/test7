require("dotenv").config()
const Discord = require("discord.js")
const client = new Discord.Client()

const token = process.env.BOT_TOKEN;

const config = require("./config.json")

client.on("ready", () => {
    console.log("Hazır")
})

client.login(token)