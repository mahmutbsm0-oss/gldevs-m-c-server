const axios = require("axios");

const SERVER_IP = "gldevs.aternos.me"; // değiştir

async function pingServer() {
    try {
        const res = await axios.get(`https://api.mcsrvstat.us/2/${SERVER_IP}`);
        console.log("Ping atıldı:", new Date().toLocaleTimeString());
    } catch (err) {
        console.log("Hata:", err.message);
    }
}

// her 5 dakikada bir ping
setInterval(pingServer, 5 * 60 * 1000);

// ilk başta da çalışsın
pingServer();