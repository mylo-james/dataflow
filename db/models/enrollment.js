'use strict';
module.exports = (sequelize, DataTypes) => {
    const Enrollment = sequelize.define(
        'Enrollment',
        {
            courseId: DataTypes.INTEGER,
            userId: DataTypes.INTEGER,
        },
        {}
    );
    Enrollment.associate = function (models) {};
    return Enrollment;
};
