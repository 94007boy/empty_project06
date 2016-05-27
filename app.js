// 这句的意思就是引入 `express` 模块，并将它赋予 `express` 这个变量等待使用。
var express = require('express');
var path = require('path');
var http = require('http');
//var cheerio = require('cheerio');
//var superagent = require('superagent');
// 调用 express 实例，它是一个函数，不带参数调用时，会返回一个 express 实例，将这个变量赋予 app 变量。
//var app = express();
//app.get('/', function (req, res, next) {
//  // 用 superagent 去抓取 https://cnodejs.org/ 的内容
//  superagent.get('https://cnodejs.org/')
//    .end(function (err, sres) {
//      // 常规的错误处理
//console.log('superagent.get'+err);
//      if (err) {
//        return next(err);
//      }
//      // sres.text 里面存储着网页的 html 内容，将它传给 cheerio.load 之后
//      // 就可以得到一个实现了 jquery 接口的变量，我们习惯性地将它命名为 `$`
//      // 剩下就都是 jquery 的内容了
//      var $ = cheerio.load(sres.text);
//      var items = [];
//      $('#topic_list .topic_title').each(function (idx, element) {
//        var $element = $(element);
//        items.push({
//          title: $element.attr('title'),
//          href: $element.attr('href')
//        });
//      });
//
//      res.send(items);
//    });
//});

//app.get('/', function (req, res, next){
//    superagent.post('http://test.w.xtche.com/port.php/Topic/getTopicIndex')
//        .send({uid:'73126',siteid:'1',tab:'hot',pagesize:'30',device_type:'Android',versions:'2.0.5'})
//        .set('Accept', 'application/json')
//        .end(function (err, sres) {
//            console.log('err = '+err);
//            console.log('sres = '+sres);
//            if (err) {
//                return next(err);
//            }
//            res.send(sres.text);
//        });
//});

//app.get('/', function (req, res) {
//    res.send('/webapp/index.html');
//});
//app.listen(3000, function () {
//  console.log('app is listening at port 3000');
//});
var app = express();
app.use(express.static(path.join(__dirname, 'webapp')));
http.createServer(app).listen(process.env.PORT || 3000);
