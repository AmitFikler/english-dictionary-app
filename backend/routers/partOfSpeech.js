const express = require('express');
const router = express.Router();

router.get('/:word', findWord);

router.get('/:word/:partOfSpeech', findWordWithPos);

module.exports = router;
