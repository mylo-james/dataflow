'use strict';

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
    return {
        name: student,
        instructorId: (i % instructors.length) + 1,
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
