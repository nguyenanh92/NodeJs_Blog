const mongoose = require('mongoose');
var slug = require('mongoose-slug-generator');
var mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, maxLength: 600 },
        image: { type: String, maxLength: 1000 },
        slug: { type: String, slug: 'name' },
        videoId: { type: String, maxLength: 250 },
        level: { type: String, maxLength: 250 },
    },
    {
        timestamps: true,
    },
);

//Add Plugin
mongoose.plugin(slug); //Slug
Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
}); //Soft Delete

module.exports = mongoose.model('Course', Course);
