const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    title: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: "User", required: true},
    time_posted: {type: Date, required: true},
    text: {type: String, required: true},
});

module.exports = mongoose.model("Message", MessageSchema);