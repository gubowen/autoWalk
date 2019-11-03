const koa = require("koa");
const App = new koa();
const cors = require('koa2-cors')

const usersRouter = require('./routers/users');


App.use(cors({
    origin: function (ctx) {
        // if (ctx.url === '/test') {
        return "*"; // 允许来自所有域名请求
        // }
        // return "http://localhost:8080"; // 这样就能只允许 http://localhost:8080 这个域名的请求了
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization', 'Date'],
    maxAge: 100,
    credentials: true,
    allowMethods: ['GET', 'POST', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'X-Custom-Header', 'anonymous'],
}))

App.use(usersRouter.routes());

App.use((ctx)=>{
    ctx.body = 'hello world';
})


App.listen(3000,()=>{
    console.log("端口号 3000 启动")
});

