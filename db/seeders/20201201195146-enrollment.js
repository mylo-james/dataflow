'use strict';

const { students, teachers, numBetween } = require('./20201201165453-users');
const { courses } = require('./20201201173010-courses');

const enrollments = [];

students.forEach((student, i) => {
    courses.forEach((course, j) => {
        const userId = i + 1 + teachers.length;
        const courseId = j + 1;
        const num = numBetween(0, 2);
        if (num) {
            enrollments.push({
                userId,
                courseId,
                createdAt: new Date(),
                updatedAt: new Date(),
            });
        }
    });
});

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Enrollments', enrollments, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Enrollments', null, {});
    },
};
