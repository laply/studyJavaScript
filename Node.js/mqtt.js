//npm install mqtt -save

var mqtt = require('mqtt');

var options = { host: '124.139.136.86', port: 1883 };

var client = mqtt.connect(options);


client.on("connect", () => {
    client.subscribe('#', (err) => {
        if (!err) {
            console.log("subscribe");
        }
    });
    console.log("connect " + client.connected);
});

client.on('message', (topic, message) => {
    console.log("message is " + message);
    console.log("topic is " + topic);
});

client.on("error", (error) => {
    console.log("can't Connect" + error);
});