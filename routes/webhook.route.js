const { createWebhook } = require('../controller/webhook.controller');
const router = require('express').Router();
router.post('/bkash/webhook', createWebhook);
module.exports = router