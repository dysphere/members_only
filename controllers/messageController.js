const db = require("../db/queries");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

exports.index = asyncHandler(async (req, res, next) => {
    const messages = await db.getAllMessages();
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
            await db.insertMessage(req.body.title, req.user.id, req.body.text);
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
    await db.deleteMessage(req.params.id);
    res.redirect("/");
})