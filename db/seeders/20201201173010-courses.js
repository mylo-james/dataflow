'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            'Courses',
            [
                {
                    name: 'Defense of the Dark Arts',
                    teacherId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'Potions',
                    teacherId: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'Beginning JavaScript',
                    teacherId: 3,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'Flying',
                    teacherId: 4,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Courses', null, {});
    },
};
