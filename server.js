if (process.env.DRSS_START === 'bot-web') {
  require('./bot-web.js')
} else if (process.env.DRSS_START === 'web') {
  require('./web.js')
} else {
  require('./bot.js')
}

setTimeout(async () => {
  console.log(`[` + new Date().toISOString().replace(/[T|Z]/g, ` `) + `+0000] INFO	: [M] Restarting the bot manually (once every 6 hours)...`);
  process.exit();
}, 21600000);