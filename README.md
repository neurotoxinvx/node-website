# node-website
基于nodejs + mongodb的站点建设

## 运行方式

1. [安装node环境](https://nodejs.org/en/)
2. node-website下执行`npm install`安装项目的依赖模块
3. 安装bower `npm install bower -g`
3. node-website下执行`bower install bootstrap`安装bootstrap
4. 从官网下载mongodb，安装到任意本地目录，在./bin同层的目录下创建 ./data/db 目录
5. `sudo chown -R data` (如果需要的话)
6. 到bin目录下，执行 `./mongod —dbpath [data路径]` （如果报错mongod命令找不到的话请执行 `export PATH="$PATH:/usr/local/mongodb/bin`）
7. 再打开一个命令行窗口，执行 `./mongo` 数据库就启动了
8. 在node-website目录下 `node app`(连接数据库版) 或者`node appMock` (假数据版)
9. 访问localhost:3000即可浏览主页

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

### 页面

1. / 首页
2. /list 列表页
3. ／move/:id 详情页
4. /admin/update/:id 更新
5. /admin/movie 录入
6. /admin/list 管理列表
7. /admin/movie/new 录入新数据 （接口）
8. /admin/movie/delete 删除记录 （接口）
