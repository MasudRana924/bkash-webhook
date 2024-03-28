const mongoose = require("mongoose");

const snsMessageSchema = new mongoose.Schema({
  Type: { type: String },
  MessageId: { type: String },
  Token: { type: String },
  TopicArn: { type: String },
  Message: { type: String },
  SubscribeURL: { type: String },
  Timestamp: { type: Date },
  SignatureVersion: { type: String },
  Signature: { type: String },
  SigningCertURL: { type: String },
});

const SNSMessage = mongoose.model("SNSMessage", snsMessageSchema);
module.exports = SNSMessage;