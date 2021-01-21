'use strict';
const faker = require('faker');

const names = [];

for (let i = 0; i < 52; i++) {
    names.push(faker.name.findName());
}

const { instructors } = require('./20201201170421-instructors');

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue,
        randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

const students = shuffle(names).map((student, i) => {
    let word1 = faker.random.word();
    let word2 = faker.random.word();

    word1 = word1[0].toUpperCase() + word1.slice(1);
    word2 = word2[0].toUpperCase() + word2.slice(1);

    return {
        name: student,
        instructorId: (i % instructors.length) + 1,
        projectName: `${word1}${word2}`,
        liveLink: faker.random.boolean()
            ? `https://${word1}${word2}.herokuapp.com`
            : null,
        repoLink: faker.random.boolean()
            ? `https://github.com/${student
                  .split(' ')
                  .join('-')}/${word1}${word2}`
            : null,
    };
});

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', students, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    },
    students,
};
