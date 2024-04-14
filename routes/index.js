const express = require('express');
const router = express.Router();

// Require controller modules
const message_controller = require('../controllers/messageController');
const user_controller = require('../controllers/userController');

/* GET home page. */
router.get('/', message_controller.index);

/* routes for creating and deleting messages */
router.get('/message', message_controller.message_create_get);

router.post('/message', message_controller.message_create_post);

router.get('/:id/delete-message', message_controller.message_delete_get);

router.post('/:id/delete-message', message_controller.message_delete_post);

/* routes for getting and posting users such as for creating users, 
logging them in, and changing the admin and membership attributes */

router.get('/sign-up', user_controller.user_create_get);

router.post('/sign-up', user_controller.user_create_post);

router.get('/log-in', user_controller.user_login_get);

router.post('/log-in', user_controller.user_login_post);

router.get('/secret', user_controller.user_secret_get);

router.post('/secret', user_controller.user_secret_post);

router.get('/admin', user_controller.user_admin_get);

router.post('/admin', user_controller.user_admin_post);

router.get('/log-out', user_controller.user_logout_get);

module.exports = router;
