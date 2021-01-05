'use strict';
const faker = require('faker');
const names = [
    'Adam Faidy',
    'Adam Jacobson',
    'Ahdari Scott',
    'Ameera Gates',
    'Andrew Dotterer',
    'Angelica Wilson',
    'Anna Bullard',
    'Arianna Johnson',
    'Arjun Narain',
    'Autumn Wiggins',
    'Barry Mattern',
    'Bryant Klein',
    'Chad Calcote',
    'Chris Read',
    'Chris Clark',
    'Chris Sorini',
    'River Cha',
    'Dak Benger',
    'Dan Chin',
    'Daniel Miller',
    'Jimmy Sherrod',
    'Derek Nungesser',
    'Dez Adkins',
    'Elyse Steingold',
    'Erick Bravo',
    'Giiaga Agha',
    'Greg Gardini',
    'Jacob Premo',
    'James Monaco',
    'Jerzy Horst',
    'Joe Alves',
    'JM Summers',
    'Jummy Park',
    'Ashley Gant',
    'Kimi Zou',
    'Kristen Florey',
    'Lane Smit',
    'Mike Jensen',
    'Michael Sanford',
    'Mishe Yi',
    'Mustafa Mousa',
    'Nhu-Y Phan',
    'Nick Bierman',
    "Nichole O'Brien",
    'Nick Menon',
    'Ramses Romero',
    'Rihana Chang',
    'Ryan Webster',
    'Safiya Cain',
    'Sami Butler',
    'Samuel Nunn',
    'Seth Witfoth',
    'Tanner Schmutte',
    'Thanh Nguyen',
    'Tony Ngo',
    'Ty Newman',
];

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
