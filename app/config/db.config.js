module.exports = {
    HOST: 'sql.freedb.tech',
    USER: 'freedb_living_space',
    PASSWORD: 'jSv!y6%3jUbMu8w',
    DB: 'freedb_living_space',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
}
