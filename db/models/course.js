'use strict';
module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define(
        'Course',
        {
            name: DataTypes.STRING,
            teacherId: DataTypes.INTEGER,
        },
        {}
    );
    Course.associate = function (models) {
        Course.belongsTo(models.User, {
            foreignKey: 'teacherId',
            as: 'Teacher',
        });
        Course.belongsToMany(models.User, {
            through: models.Enrollment,
            foreignKey: 'courseId',
        });
    };
    return Course;
};
