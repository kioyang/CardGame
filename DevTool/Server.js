const express = require('express');
const path = require('path');
const app = express();

//  主页输出 "Hello World"
app.get('/', function (req, res) {
    console.log("主页 GET 请求");
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
})

app.get('/main.bundle.js', function (req, res) {
    console.log("主页 GET 请求");
    res.sendFile(path.resolve(__dirname, '../dist/main.bundle.js'));
})



const server = app.listen(8081, function () {

    const host = server.address().address;
    const port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
