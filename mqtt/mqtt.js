//npm install mqtt -save

import mqtt from 'mqtt';

// 처리 필요
const options = {
    host: '124.139.136.86',
    port: 1883,
    protocol: 'mqtts', //?
    username: '',
    password: 'password',
};

const client = mqtt.connect(options);


client.on("coonect", () => {
    console.log("connect" + client.connected);
});

client.on("error", (error) => {
    console.log("can't Connect" + error);
});

client.on('message', (topic, message, packet) => {
    console.log("message is" + message);
    console.log("topic is" + topic);
});

var option = {
    retain: true,
    qos: 1
};

client.publish("topic", "message", option);





client.end();