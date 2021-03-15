const Course = require('../models/Course');
const { multipleMongooseToOject } = require('../../util/mongoose');
class SiteController {
    //[GET] /home
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: multipleMongooseToOject(courses),
                });
            })
            .catch(next);
    }

    //[GET] /search
    search(req, res) {
        res.send('search');
    }
}

module.exports = new SiteController();
