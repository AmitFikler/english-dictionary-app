const express = require('express');
const router = express.Router();
const AWS = require('aws-sdk');
const { findWord } = require('../controllers/word');

const dynamoDB = new AWS.DynamoDB.DocumentClient({
  region: 'us-east-1',
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
});

router.get('/:word', findWord);

// router.get('/:word', async (req, res) => {
//   const { word, partOfSpeech } = req.params;
//   const params = {
//     TableName: 'english-dict',
//     KeyConditionExpression: '#word = :word and #',
//     ExpressionAttributeNames: {
//       '#word': 'word',
//     },
//     ExpressionAttributeValues: {
//       ':word': word,
//     },
//   };
//   try {
//     const words = await dynamoDB.query(params).promise();
//     res.send(words.Items);
//   } catch (error) {
//     res.send(error);
//   }
// });

module.exports = router;
