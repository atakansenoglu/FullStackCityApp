module.exports = (sequelize, Datatypes) => {
    const Cities = sequelize.define("Cities", {
      longitude: {
        type: Datatypes.DECIMAL(10, 2),
        allowNull: false,
      },
      latitude: {
        type: Datatypes.DECIMAL(10, 2),
        allowNull: false,
      },
      name: {
        type: Datatypes.STRING,
      },
      weather: {
        type: Datatypes.STRING,
      },
    });
  
    return Cities;
  };
  