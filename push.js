const { SERVER_KEY, DEVICE_ID } = process.env;

const FCM = require('fcm-push');

const serverKey = SERVER_KEY;
const fcm = new FCM(serverKey);

const deviceOrTopicToken = DEVICE_ID;

const message = {
  to: deviceOrTopicToken, // required fill with device token or topics
  collapse_key: 'your_collapse_key',
  data: {
    title: 'Test notification',
    body: 'This is a test notification, enjoy...',
    volume: new Date().getTime(),
    contents: "/blog/12345",
    navigate: true
  },
};

fcm.send(message)
.then(function (response) {
  console.log("Successfully sent with response: ", response);
})
.catch(function (err) {
  console.log("Something has gone wrong!");
  console.error(err);
})