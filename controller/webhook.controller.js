const https = require('https');
const crypto = require('crypto');
const WebhookModel = require("../models/webhook");

const downloadCertificate = (certUrl) => {
    return new Promise((resolve, reject) => {
        https.get(certUrl, (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                resolve(data);
            });
        }).on('error', (err) => {
            reject(err);
        });
    });
};

const verifySignature = async (message, signature, certUrl) => {
    try {
        // Download certificate
        const cert = await downloadCertificate(certUrl);
        console.log("cert",cert);
        // Load certificate
        const verifier = crypto.createVerify('sha256');
        verifier.update(JSON.stringify(message));
        // Verify signature
        const isVerified = verifier.verify(cert, signature, 'base64');
        return isVerified;
    } catch (error) {
        console.error('Error verifying signature:', error);
        return false;
    }
};
const createWebhook = async (req, res) => {
    const payload = req.body;
    console.log("Received payload:", payload);
    // const signature = req.headers['x-amz-sns-message-id']; // Assuming signature is in header 'x-amz-sns-message-id'
    // if (!signature) {
    //     return res.status(400).send("Signature not found in headers");
    // }
    // Verify signature
    // const isSignatureValid = verifySignature(payload, signature, payload.SigningCertURL);
    // if (!isSignatureValid) {
    //     return res.status(403).send("Signature verification failed");
    // }
    // switch (payload.Type) {
    //     case "SubscriptionConfirmation":
    //         await WebhookModel.createMessage(req.body);
    //         res.status(200).send("Subscription confirmed successfully");
    //         break;
    //     case "Notification":
    //         await WebhookModel.createNotification(payload);
    //         res.status(200).send("Notification received successfully");
    //         break;
    //     default:
    //         res.status(400).send("Bad Request");
    // }
};
module.exports = { createWebhook };
