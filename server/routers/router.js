const { Router } = require('express');
const userController = require('../controllers/user_controller');
const VKServicesController = require('../controllers/vk_services_controller');
const router = Router()
const { body } = require ('express-validator');

router.post('/registration'
// body('email').isEmail(),
// body('password').isLength({min:5,max: 32})
,userController.registration);

router.post('/writecardsvk',userController.registration_accounts_network);

router.post('/login',userController.login);

router.post('/logout',userController.logout);

router.get('/activate/:link',userController.activate);

router.get('/refresh',userController.refresh);

router.post('/userAccountsvk',userController.getUserData);

/* VKSERVISES */

router.post('/sendMessages',VKServicesController.sendMessages);

router.post('/addSuggestionsFriends',VKServicesController.addSuggestionsFriends);

router.post('/autoResponderFriends',VKServicesController.autoResponderFriends);

router.post('/filterSuggestionsFriends',VKServicesController.filterSuggestionsFriends);

router.post('/autoLikingFriendsOrGroups',VKServicesController.autoLikingFriendsOrGroups);

module.exports = router;