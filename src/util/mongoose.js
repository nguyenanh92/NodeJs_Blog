module.exports = {
    multipleMongooseToOject: function (mongooses) {
        return mongooses.map((mongoose) => mongoose.toObject());
    },
    MongooseToOject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
