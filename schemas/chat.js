var mongoose = require('mongoose');
var ChatSchema = new mongoose.Schema({
    word: String
});

ChatSchema.statics = {
    fetch: function (cd) { // 取出数据库里所有数据
        return this
            .find({})
            .exec(cd)
    }
};

module.exports = ChatSchema;