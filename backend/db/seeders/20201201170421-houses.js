'use strict';

const houses = [
    {
        name: 'Gryffindor',
        color: 'eeba30',
        animal: 'lion',
        crestImg:
            'https://static.wikia.nocookie.net/harrypotter/images/b/b1/Gryffindor_ClearBG.png/revision/latest/scale-to-width-down/350?cb=20190222162949',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        name: 'Hufflepuff',
        color: 'ecb939',
        animal: 'badger',
        crestImg:
            'https://vignette.wikia.nocookie.net/harrypotter/images/8/8c/Hufflepuff_ClearBG2.png/revision/latest?cb=20160702234018',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        name: 'Ravenclaw',
        color: '222f5b',
        animal: 'eagle',
        crestImg:
            'https://static.wikia.nocookie.net/harrypotter/images/4/4e/RavenclawCrest.png/revision/latest?cb=20161020182442',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        name: 'Slytherin',
        color: '1d3c0e',
        animal: 'serpent',
        crestImg:
            'https://static.wikia.nocookie.net/harrypotter/images/0/00/Slytherin_ClearBG.png/revision/latest/scale-to-width-down/350?cb=20161020182557',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
];

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Houses', houses, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Houses', null, {});
    },
    houses,
};
