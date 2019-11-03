const Router = require('koa-router')

const usersRouter = new Router({prefix:'/users'});


usersRouter.get('/',(ctx)=>{
    ctx.body='这是用户页面';
    console.log("这是用户页面");
})


module.exports = usersRouter;