const express = require('express');
const router = express.Router();
const daoComonController = require("../../daos/daoCommon")

router.get('/', daoComonController.fetchAllProducts);


router.get("/:id", daoComonController.fetchSingleProduct)

module.exports = router;