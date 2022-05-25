const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 3021;


router.get('/', (req, res) => {
    res.json({
        'All noble': `http://localhost:${PORT}/api/noble`,
    });
});



router.use('/noble', require('./api/SingleProductRoutes'));

module.exports = router
