const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
    Type: {
        type: String,
        required: true
    },
    MessageId: {
        type: String,
        required: true
    },
    TopicArn: {
        type: String,
        required: true
    },
    Message: {
        dateTime: String,
        debitMSISDN: String,
        creditOrganizationName: String,
        creditShortCode: String,
        trxID: String,
        transactionStatus: String,
        transactionType: String,
        amount: String,
        currency: String,
        transactionReference: String,
        merchantInvoiceNumber: String
    },
    Timestamp: {
        type: Date,
        required: true
    },
    SignatureVersion: {
        type: String,
        required: true
    },
    Signature: {
        type: String,
        required: true
    },
    SigningCertURL: {
        type: String,
        required: true
    },
    UnsubscribeURL: {
        type: String,
        required: true
    }
});

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;