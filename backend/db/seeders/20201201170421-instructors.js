'use strict';

const instructors = [
    { id: 1, name: 'Gen' },
    { id: 2, name: 'Ed' },
    { id: 3, name: 'JD' },
    { id: 4, name: 'Ryan' },
    { id: 5, name: 'Nish' },
    { id: 6, name: 'Mylo' },
];

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Instructors', instructors, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Instructors', null, {});
    },
    instructors,
};
