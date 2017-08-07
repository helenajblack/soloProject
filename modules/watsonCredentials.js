require('dotenv').config();

const watsonCredentials = {
  url: "https://stream.watsonplatform.net/text-to-speech/api",
  username: process.env.USERNAME_WATSON,
  password: process.env.PASSWORD_WATSON
};

module.exports = watsonCredentials;
