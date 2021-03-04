const Course = require('./models/Course');
const { MongooseToOject } = require('../../util/mongoose');
class CourseController {
    //[GET] /details
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', {
                    courses: MongooseToOject(course),
                });
            })
            .catch(next);
    }

    create(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', {
                    courses: MongooseToOject(course),
                });
            })
            .catch(next);
    }
}

module.exports = new CourseController();
