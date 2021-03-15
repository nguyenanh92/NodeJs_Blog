const mongoose = require('mongoose');
var slug = require('mongoose-slug-generator');
var mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema(
    {
        _id: { type: Number },
        name: { type: String, required: true },
        description: { type: String, maxLength: 600 },
        image: { type: String, maxLength: 1000 },
        slug: { type: String, slug: 'name' },
        videoId: { type: String, maxLength: 250 },
        level: { type: String, maxLength: 250 },
    },
    {
        _id: false,
        timestamps: true,
    },
);
//Custom query helper.
Course.query.sortable = function (req) {
    if (req.query.hasOwnProperty('_sort')) {
        const inValidType = ['asc', 'desc'].includes(req.query.type);

        return this.sort({
            [req.query.column]: inValidType ? req.query.type : 'desc',
        });
    }
    return this;
};

//Add Plugin
mongoose.plugin(slug); //Slug

Course.plugin(AutoIncrement);

Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
}); //Soft Delete

module.exports = mongoose.model('Course', Course);
