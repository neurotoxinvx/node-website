var express = require('express');
var path = require('path');

var port = process.env.PORT || 3000;
var app = express();

//视图文件的路径
app.set('views', './views/pages');

//使用的模板引擎
app.set('view engine', 'jade');

/*
 * 格式化表单
 * 新版express已不支持app.use(express.bodyParser());
 * 需要安装body-parser模块，npm install body-parser
 * 然后使用代码为：app.use(require('body-parser').urlencoded({extended: true}))
 * */
//app.use(express.bodyParser());

//静态资源的路径
app.use(express.static(path.join(__dirname, 'public')));

//设置端口号
app.listen(port);

//打印当前服务端口
console.log('node-website started on port ' + port);

//页面路由
app.get('/', function (req, res) {
    res.render('index', {
        title: '玩点儿啥'
    });
});

app.get('/film', function (req, res) {
    res.render('film', {
        title: '看电影吗',
        movies: [{
            title: '疯狂动物城',
            _id: 1,
            poster: '/images/movie2.jpg'
        }, {
            title: '我的特工爷爷',
            _id: 2,
            poster: '/images/movie1.jpg'
        }, {
            title: '蝙蝠侠大战超人',
            _id: 3,
            poster: '/images/movie3.jpg'
        }, {
            title: '伦敦陷落',
            _id: 4,
            poster: '/images/movie4.jpg'
        }, {
            title: '疯狂的麦克斯',
            _id: 5,
            poster: '/images/movie5.jpg'
        }, {
            title: '碟中谍5:神秘国度',
            _id: 6,
            poster: '/images/movie6.jpg'
        }, {
            title: '复仇者联盟2:奥创纪元',
            _id: 7,
            poster: '/images/movie7.jpg'
        }, {
            title: '功夫熊猫3',
            _id: 8,
            poster: '/images/movie8.jpg'
        }, {
            title: '美人鱼',
            _id: 9,
            poster: '/images/movie9.jpg'
        }, {
            title: '神战：权力之眼',
            _id: 10,
            poster: '/images/movie10.jpg'
        }, {
            title: '小黄人大眼萌',
            _id: 11,
            poster: '/images/movie11.jpg'
        }, {
            title: '明日国度',
            _id: 12,
            poster: '/images/movie12.jpg'
        }, {
            title: '极盗者',
            _id: 13,
            poster: '/images/movie13.jpg'
        }, {
            title: '神奇四侠4',
            _id: 14,
            poster: '/images/movie14.jpg'
        }, {
            title: '春光乍泄',
            _id: 15,
            poster: '/images/movie15.jpg'
        }, {
            title: '超能查派',
            _id: 16,
            poster: '/images/movie16.jpg'
        }, {
            title: '精灵旅社2',
            _id: 17,
            poster: '/images/movie17.jpg'
        }, {
            title: '移动迷宫2',
            _id: 18,
            poster: '/images/movie18.jpg'
        }, {
            title: '绝命海拔',
            _id: 19,
            poster: '/images/movie19.jpg'
        }, {
            title: '速度与激情7',
            _id: 20,
            poster: '/images/movie20.jpg'
        }]
    });
});

app.get('/movie/:id', function (req, res) {
    res.render('detail', {
        title: '电影详情',
        movie: {
            title: '我的特工爷爷',
            doctor:'洪金宝',
            year:2016,
            country:'中国香港',
            language:'中文',
            poster: 'http://tu1.xiamp4.com/20140210202546153.jpg',
            flash: 'http://p.bokecc.com/flash/single/E4AE228E2DC39B85_EFE51B1DE4D8D8159C33DC5901307461_false_F6FD7E6BB2BCD92C_1/player.swf',
            summary:'电影讲述了退休军官老丁(洪金宝饰)因“健忘症”弄丢孙女，内疚回到老家。邻居小女孩春花(陈沛妍 饰)成为他的慰藉。可女孩的父亲(刘德华饰)无意卷入了当地黑帮团伙的争斗中。老丁为营救春花挺身而出，也寻回那份作为军人的骄傲和弥补作为爷爷的过错。'
        }
    });
});

app.get('/admin-film', function (req, res) {
    res.render('film', {
        title: '后台－修改列表页',
        movies:[{
            _id:1,
            title: '机械战警',
            doctor:'何塞.帕迪利亚',
            year:2014,
            country:'美国',
            language:'英语',
            poster: 'http://img1.gamersky.com/image2012/12/20121205p_9/gamersky_07small_14_201212516474F0.jpg',
            flash: 'http://player.youku.com/player.php/sid/XNJA1Njc0NTUy/v.swf',
            summary:'我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述'
        },{
            _id:1,
            title: '机械战警',
            doctor:'何塞.帕迪利亚',
            year:2014,
            country:'美国',
            language:'英语',
            poster: 'http://img1.gamersky.com/image2012/12/20121205p_9/gamersky_07small_14_201212516474F0.jpg',
            flash: 'http://player.youku.com/player.php/sid/XNJA1Njc0NTUy/v.swf',
            summary:'我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述'
        }]
    });
});

app.get('/admin/list', function (req, res) {
    res.render('admin', {
        title: '后台录入页',
        movie:{
            title: '',
            doctor:'',
            year:'',
            country:'',
            language:'',
            poster: '',
            flash: '',
            summary:''
        }
    });
});