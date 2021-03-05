const Router = require('express'); 
const router = new Router(); 
const deviceRouter = require('./deviceRouter');
const userRouter = require('./userRouter');
const brandRouter = require('./brandRoute');
const typeRouter = require('./typeRoute');

router.use('/user', userRouter); 
router.use('/type', typeRouter); 
router.use('/brand', brandRouter); 
router.use('/device', deviceRouter); 

module.exports = router; 
