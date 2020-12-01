'use strict';
module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define(
        'course',
        {
            name: DataTypes.STRING,
            teacherId: DataTypes.INTEGER,
        },
        {}
    );
    Course.associate = function (models) {
        Course.belongsTo(models.User, { foreignKey: 'teacherId' });
        Course.belongsToMany(models.User, {
            through: 'enrollments',
            foreignKey: 'courseId',
            otherKey: 'userId',
        });
    };
    return Course;
};
