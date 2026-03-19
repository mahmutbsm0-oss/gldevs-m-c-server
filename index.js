const mineflayer = require('mineflayer');

const host = 'gldev.aternos.me'; // değiştir
const username = 'AFK_Bot' + Math.floor(Math.random() * 1000);

function createBot() {
    const bot = mineflayer.createBot({
        host: host,
        port: 55243,
        username: username,
        version: false
    });

    bot.on('spawn', () => {
        console.log('✅ Bot sunucuya girdi!');
    });

    bot.on('end', () => {
        console.log('❌ Bot atıldı, tekrar bağlanıyor...');
        setTimeout(createBot, 5000);
    });

    bot.on('error', (err) => {
        console.log('Hata:', err.message);
    });
}

createBot();
