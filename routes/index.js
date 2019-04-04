const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	return res.send({response: 'NodeJS deu bão...!'});
});


module.exports = router;