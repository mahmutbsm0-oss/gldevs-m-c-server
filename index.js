const mineflayer = require('mineflayer');
const express = require('express');

// 1️⃣ Express server (Railway için container’ı açık tutar)
const app = express();
app.get('/', (req, res) => res.send('Bot aktif!'));
app.listen(3000, () => console.log('Express sunucu çalışıyor...'));

// 2️⃣ Minecraft AFK Bot
const host = 'gldev.aternos.me'; // Aternos IP 
function createBot() {
    const bot = mineflayer.createBot({
        host: host,
        port: 55243, 
        username: 'AFKBot' + Math.floor(Math.random() * 1000),
        version: false
    });

    bot.on('spawn', () => console.log('✅ Bot sunucuya girdi!'));

    bot.on('kicked', (reason) => console.log('KICK:', reason));
    bot.on('error', (err) => console.log('HATA:', err.message));
    bot.on('end', () => {
        console.log('🔁 Yeniden bağlanıyor...');
        setTimeout(createBot, 5000);
    });
}

createBot();
