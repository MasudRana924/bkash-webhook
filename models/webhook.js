const webhook = require("../schema/subscriptionSchema");
const notification = require("../schema/notificationSchema");
const createMessage = async (data) => {
    const newMessage = new webhook(data);
    const createdNewMessage = await newMessage.save();
    return createdNewMessage;
};

const createNotification = async (data) => {
    try {
        console.log("data", data);
        const newNotification = new notification(data);
        const createdNewNotification = await newNotification.save();
        return createdNewNotification;
    } catch (error) {
        console.error("Error saving notification:", error);
        throw error;
    }
};
module.exports = {
    createMessage,
    createNotification,
};