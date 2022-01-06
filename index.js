// Shard Manager
const { ShardingManager } = require('discord.js');
const AutoPoster = require('topgg-autoposter');

const { discordToken, topggToken } = require('./private/config.json');

const manager = new ShardingManager('./bot.js', { token: discordToken });

manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));

manager.spawn();