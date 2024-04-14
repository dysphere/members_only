const mongoose = require("mongoose");
const { DateTime } = require("luxon");

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    title: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: "User", required: true},
    time_posted: {type: Date, required: true},
    text: {type: String, required: true},
});

MessageSchema.virtual("time_posted_formatted").get(function () {
    return DateTime.fromJSDate(this.time_posted).toLocaleString(DateTime.DATETIME_FULL);
  });

MessageSchema.virtual("url").get(function () {
    return `/${this._id}`;
});

module.exports = mongoose.model("Message", MessageSchema);