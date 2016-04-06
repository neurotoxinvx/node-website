# node-website
基于nodejs + mongodb的站点建设

### 目录结构
```shell
./node-website/ --目录
├── models --数据模型
├── node_modules --依赖的node模块
├── public --公用文件
   ├── css  --css文件
   ├── libs --依赖的库
   └── images  --图片文件夹
├── schemas --数据库文档模型及方法函数
├── views   --模版页面
├── app.js  --带数据库版入口文件
└── appMock.js --假数据版入库文件
```

## 运行方式

[安装node环境](https://nodejs.org/en/)
  
安装项目的依赖模块:node-website下执行
```shell
npm install
```

安装bower:
```shell
npm install bower -g
```

安装bootstrap:node-website下执行
```shell
bower install bootstrap
```


从官网下载mongodb，安装到任意本地目录，在./bin同层的目录下创建 ./data/db 目录


赋予数据库读写权限:
```shell
sudo chown -R data
```

到bin目录下，执行
```shell
./mongod —dbpath [data路径]
```
如果报错mongod命令找不到的话请执行
```shell
export PATH="$PATH:/usr/local/mongodb/bin
```

```shell
ctrl + t
```
启动数据库：再打开一个命令行窗口，执行
```shell
./mongo
```

在node-website目录下
```shell
node app
```
(连接数据库版)
或者
```shell
node appMock
``` 
(假数据版)

访问localhost:3000即可浏览主页

注：必须同时启动数据库及node服务才可以访问

补充：关于mongodb数据库的安装配置启动问题：
[参考资料1](http://cnodejs.org/topic/547293caa3e2aee40698df0b)
[参考资料2](http://stackoverflow.com/questions/22862808/mongod-comand-not-found-os-x)

## 框架&工具

### 服务端
1. Express
2. mongodb
3. mongoose
4. jade

...

### 客户端
1. bootstrap
2. jquery

