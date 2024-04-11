const Message = require('../models/message');
const User = require('../models/user');
const bcrypt = require("bcryptjs");
const passport = require("passport");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

exports.user_create_get = asyncHandler(async (req, res, next) =>
{
    res.send("NOT IMPLEMENTED: User create GET");
});

exports.user_create_post = asyncHandler(async (req, res, next) =>
{
    res.send("NOT IMPLEMENTED: User create POST");
});

exports.user_login_get = asyncHandler(async (req, res, next) =>
{
    res.send("NOT IMPLEMENTED: User login GET");
});

exports.user_login_post = asyncHandler(async (req, res, next) =>
{
    res.send("NOT IMPLEMENTED: User login POST");
});

exports.user_secret_get = asyncHandler(async (req, res, next) =>
{
    res.send("NOT IMPLEMENTED: User secret GET");
});

exports.user_secret_post = asyncHandler(async (req, res, next) =>
{
    res.send("NOT IMPLEMENTED: User secret POST");
});

exports.user_admin_get = asyncHandler(async (req, res, next) =>
{
    res.send("NOT IMPLEMENTED: User admin GET");
});

exports.user_admin_post = asyncHandler(async (req, res, next) =>
{
    res.send("NOT IMPLEMENTED: User admin POST");
});