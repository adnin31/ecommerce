const express = require('express')
const router = express.Router()
const gadget = require('../controllers/items')


router.get('/',gadget.viewAll)
router.post('/',gadget.insert)
router.put('/:id',gadget.updateItem)
router.delete('/:id',gadget.deleteItems)
module.exports = router;
