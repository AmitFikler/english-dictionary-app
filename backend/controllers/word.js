exports.findWord = (req, res) => {
  const { word } = req.params;
  const params = {
    TableName: 'english-dict',
    KeyConditionExpression: '#word = :word',
    ExpressionAttributeNames: {
      '#word': 'word',
    },
    ExpressionAttributeValues: {
      ':word': word,
    },
  };
  try {
    const words = await dynamoDB.query(params).promise();
    res.send(words.Items);
  } catch (error) {
    res.send(error);
  }
};
