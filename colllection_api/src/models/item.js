module.exports =(sequelize, DataTypes) => {
    return sequelize.define('Item', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        types{
            type: DataTypes.STRING,
            allowNull : true,
            get() {
                return this.getDataValue('types').split(',')
            },
            set(types){
                this.setDataValue('types', types.join())
            }
        },{
            timestamps: true,
            createdAt: 'created',
            updatedAt: false    
        })
}