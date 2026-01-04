const amqplib = require("amqplib");
const { QUEUE_NAME } = require("./server-config");

let connection;
let channel;

async function connectQueue() {
  try {
    connection = await amqplib.connect("amqp://localhost");
    channel = await connection.createChannel();

    await channel.assertQueue(QUEUE_NAME);
  } catch (error) {
    console.log(error);
  }
}

function consumeQueueMessage() {
  channel.consume(
    QUEUE_NAME,
    async function (data) {
      const jsonData = JSON.parse(data.content.toString());
      const { sendMail } = require("../services/email-service");
      await sendMail(jsonData.mailtTo, jsonData.subject, jsonData.text);
      channel.ack(data);
    },
    {
      noAck: false,
    }
  );
}

module.exports = {
  connectQueue,
  consumeQueueMessage,
};
