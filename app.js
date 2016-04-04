var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var _ = require('underscore');

var Movie = require('./models/movie');
var Chat = require('./models/chat')

var port = process.env.PORT || 3000;
var app = express();

//连接本地数据库

/*
 * 注意命令行开启mangodb服务:
 * mongod --dbpath=./db --port 27017
 * */
mongoose.connect('mongodb://127.0.0.1/node-website');

mongoose.connection.on("error", function (error) {
    console.log("数据库连接失败：" + error);
});
mongoose.connection.on("open", function () {
    console.log("------数据库连接成功！------");
});

//视图文件的路径
app.set('views', './views/pages');

//使用的模板引擎
app.set('view engine', 'jade');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//静态资源的路径
app.use(express.static(path.join(__dirname, 'public')));

//设置端口号
app.listen(port);

//打印当前服务端口
console.log('node-website started on port ' + port);

//--------------------------------------------------------------【页面渲染】
// 首页
app.get('/', function (req, res) {
    Movie.fetch(function (err, movies) {
        if (err) {
            console.log(err);
        }

        res.render('index', {
            title: '玩点儿啥',
            movies: movies
        });
    });
});

// 电影列表页
app.get('/list', function (req, res) {
    Movie.fetch(function (err, movies) {
        if (err) {
            console.log(err);
        }

        res.render('list', {
            title: '看电影吗',
            movies: movies
        });
    });
});

// 音乐页面
app.get('/music', function(req, res){
    res.render('music', {
        title: '听歌儿吗'
    });
});

// 聊天儿啊
app.get('/chat', function(req, res){
    Chat.fetch(function (err, words) {
        if (err) {
            console.log(err);
        }

        res.render('chat', {
            title: '聊天儿啊',
            words: words
        });
    });
});

// 加我微信啊

app.get('/aboutme', function(req, res){
    res.render('aboutme', {
        title: '加我微信啊'
    });
});

// 电影详情页
app.get('/detail/:id', function (req, res) {
    var id = req.params.id;

    Movie.findById(id, function (err, movie) {
        if (err) {
            console.log(err);
        }
        res.render('detail', {
            title: movie.title,
            movie: movie
        });
        return false;
    });
});

// 电影后台更新
app.get('/admin/update/:id', function (req, res) {
    var id = req.params.id;

    if (id) {
        Movie.findById(id, function (err, movie) {
            res.render('input', {
                title: '后台更新',
                movie: movie
            });
        });
    }
});

// 电影后台录入
app.get('/admin/input', function (req, res) {
    res.render('input', {
        title: '后台录入电影',
        movie: {
            title: '',
            doctor: '',
            year: '',
            country: '',
            language: '',
            poster: '',
            flash: '',
            summary: ''
        }
    });
});

// 电影后台管理列表
app.get('/admin/list', function (req, res) {
    Movie.fetch(function (err, movies) {
        if (err) {
            console.log(err);
        }

        res.render('admin-list', {
            title: '后台电影管理',
            movies: movies
        });
    });
});


//--------------------------------------------------------------【请求接口】

//电影录入新数据
app.post('/admin/movie/new', function (req, res) {
    var id = req.body.movie._id;
    var movieObj = req.body.movie;
    var _movie;
    if (id !== 'undefined') {
        Movie.findById(id, function (err, movie) {
            if (err) {
                console.log(err);
            }

            _movie = _.extend(movie, movieObj);
            _movie.save(function (err, movie) {
                if (err) {
                    console.log(err);
                }

                res.redirect('/detail/' + movie._id);
            });
        });
    } else {
        _movie = new Movie({
            doctor: movieObj.doctor,
            title: movieObj.title,
            country: movieObj.country,
            language: movieObj.language,
            year: movieObj.year,
            poster: movieObj.poster,
            summary: movieObj.summary,
            flash: movieObj.flash
        });

        _movie.save(function (err, movie) {
            if (err) {
                console.log(err);
            }

            res.redirect('/detail/' + movie._id);
        });
    }
});

// 电影删除记录

app.post('/admin/movie/delete', function (req, res) {
    var id = req.body._id;
    Movie.remove({_id: id}, function (err, docs) {
        if (err) {
            console.log(err);
        }
        console.log('删除成功');
        res.send(docs);
    });
});

// 留言接口

app.post('/sendmessage', function(req, res){
    var chatObj = req.body.chat;
    var _chat;
    _chat = new Chat({
        word: chatObj.word
    });

    _chat.save(function (err, chat) {
        if (err) {
            console.log(err);
        }

        res.redirect('/chat');
    });
});