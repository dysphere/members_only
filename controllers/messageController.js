const db = require("../db/queries");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

exports.index = asyncHandler(async (req, res, next) => {
    const messages = await Message.find().populate("user").sort({time_posted: 1}).exec();
    res.render("index", {
        title: "Members Only", 
        user: req.user,
        messages: messages});
})

exports.message_create_get = asyncHandler(async (req, res, next) =>
{
    res.redirect("/");
})

exports.message_create_post = [

    body("title")
    .trim()
    .escape(),
    body("text")
    .trim()
    .escape(),

    asyncHandler(async (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.redirect("/");
        }

        try {
            const message = new Message({
                title: req.body.title,
                user: req.user,
                time_posted: new Date(),
                text: req.body.text,
            })
            const result = await message.save();
            res.redirect("/");
        }
        catch(error) {
            next(error);
        }
    })
]

exports.message_delete_get = asyncHandler(async (req, res, next) => {
    res.redirect("/");
})

exports.message_delete_post = asyncHandler(async (req, res, next) => {
    await Message.findByIdAndDelete(req.params.id);
    res.redirect("/");
})