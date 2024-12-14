import express from 'express'
import { addSubscribers, getSubscriber } from '../Controllers/subscriber.js';
import { isAdmin, requireSignIn } from '../middleware/adminAuth.js';

let router=express.Router();


    router.post('/uplordSubscribe',addSubscribers);

    router.get('/getSubscriber',getSubscriber);


export default router;