const AWS = require('aws-sdk');
const { PART_OF_SPEECH_DICT } = require('../helpers/partOfSpeech');

const dynamoDB = new AWS.DynamoDB.DocumentClient({
  region: 'us-east-1',
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
});

exports.randomPartOfSpeech = async (req, res) => {
  const { part } = req.params;
  const params = {
    TableName: 'english-dict',
    FilterExpression: '#pos = :pos',
    ExpressionAttributeNames: {
      '#pos': 'pos',
    },
    ExpressionAttributeValues: {
      ':pos': PART_OF_SPEECH_DICT[part.toLowerCase()],
    },
  };
  try {
    const words = await dynamoDB.scan(params).promise();
    const RANDOM_INDEX = Math.floor(Math.random() * words.Items.length);
    res.send(words.Items[RANDOM_INDEX]); // random word
  } catch (error) {
    res.json(error);
  }
};
