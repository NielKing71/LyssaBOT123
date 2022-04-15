const config = require('../config');
const Funcs = require('../database/index')

// Configurando client
const { Client, Collection } = require('discord.js');
const bot = new Client({
  intents: config.BotConfig.intents,
  partials: config.BotConfig.partials,
});

// Requerimentos
const { promisify } = require('util');
const Glob = require('glob');
const colors = require('colors');
const PGlob = promisify(Glob);

// Coleções && Handlers
bot.slashCMD = new Collection();
bot.ButtonCMD = new Collection();

['Eventos'].forEach((handler) => {
  require(`../Handlers/${handler}`)(bot, PGlob, colors);
}) 


bot.login(process.env.bot_token)