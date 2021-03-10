const Course = require('./models/Course');
const { multipleMongooseToOject } = require('../../util/mongoose');
class MeController {
    //[GET] /details
    storedCourses(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses, deletedCount]) =>
                res.render('me/stored-courses', {
                    deletedCount: deletedCount,
                    courses: multipleMongooseToOject(courses),
                }),
            )
            .catch(next);
    }
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then((courses) =>
                res.render('me/trash-courses', {
                    courses: multipleMongooseToOject(courses),
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController();
