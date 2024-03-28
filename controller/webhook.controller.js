const WebhookModel = require("../models/webhook");
const createWebhook = async (req, res) => {
    const payload = req.body;
    console.log("Received payload:", payload);
    switch (payload.Type) {
        case "SubscriptionConfirmation":
            await WebhookModel.createMessage(req.body);
            res.status(200).send("Subscription confirmed successfully");
            break;
        case "Notification":
            await WebhookModel.createNotification(payload);
            res.status(200).send("Notification received successfully");
            break;
        default:
            res.status(400).send("Bad Request");
    }
};
module.exports = { createWebhook };