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
    Enrollment.associate = function (models) {
        Enrollment.belongsTo(models.Course, { foreignKey: { courseId } });
        Enrollment.belongsTo(models.Course, { foreignKey: { userId } });
    };
    return Enrollment;
};
